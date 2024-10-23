"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div>
            <Image alt="logo"
                   className="hidden md:block cursor-pointer"
                   height="100"
                   width="100"
                   src="/assets/images/logo.png"></Image>
        </div>
    )
}

export default Logo;