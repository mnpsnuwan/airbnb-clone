"use client";

import {BiSearch} from "react-icons/bi";

const Search = () => {

    return (
        <div
            className="
                border-[1px]
                w-full
                md:w-auto
                py-2
                rounded-full
                shadow-md
                hover:shadow-lg
                transition
                cursor-pointer
            "
        >
            <div className="flex flex-row items-center justify-between ">
                <div className="px-6 text-sm font-semibold ">Select the Location</div>
                <div className="flex flex-row items-center gap-3 pl-6 pr-2">
                    <div className="p-2 text-white rounded-full bg-rose-600">
                        <BiSearch size={18}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;