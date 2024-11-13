'use client';

import Modal from "@/app/components/modals/Modal";
import useRentModal from "@/app/hooks/useRentModal";
import {useMemo, useState} from "react";
import Heading from "@/app/components/Heading";
import {options} from "@/app/components/navbar/OptionsTab";
import OptionInput from "@/app/components/inputs/OptionInput";
import {FieldValues, useForm} from "react-hook-form";

enum STEPS {
    OPTION = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal();

    const [step, setStep] = useState(STEPS.OPTION);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            option: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: ''
        }
    });

    const option = watch('option');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }

    const onBack = () => {
        setStep((value) => value - 1);
    }
    const onNext = () => {
        setStep((value) => value + 1);
    }

    const actionLabel = useMemo(() => {
        if(step === STEPS.PRICE) {
            return 'Create';
        }
        return 'Next';
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if(step === STEPS.OPTION) {
            return undefined;
        }

        return 'Back';
    }, [step])

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Which of these best describes your place?"
                subTitle="Pick an option"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                {options.map((item) => (
                    <div
                        key={item.label}
                        className="col-span-1"
                    >
                        <OptionInput
                            onClick={(option) => setCustomValue('option', option)}
                            selected={option === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <Modal
        isOpen={rentModal.isOpen}
        title="Airbnb your home!"
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={actionLabel}
        secondaryAction={step === STEPS.OPTION ? undefined : onBack}
        secondaryActionLabel={secondaryActionLabel}
        body={bodyContent}
        />
    );
}

export default RentModal;