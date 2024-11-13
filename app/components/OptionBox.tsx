'use client';

import {IconType} from "react-icons";
import React, {useCallback} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import qs from "query-string";

interface OptionBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const OptionBox: React.FC<OptionBoxProps> = ({
                                                 icon: Icon,
                                                 label,
                                                 selected
                                             }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(()=> {
        let currencyQuery = {};

        if(params){
            currencyQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currencyQuery,
            option: label
        }

        if(params?.get('option')=== label){
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, {skipNull: true});

        router.push(url);

    }, [label, params, router]);
    return (
        <div onClick={handleClick}
            className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}>
            <Icon size={26}/>
            <div className="font-medium text-xs">
                {label}
            </div>
        </div>
    );
}

export default OptionBox;
