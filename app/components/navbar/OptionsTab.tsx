'use client';

import Container from "@/app/components/Container";
import {TbBeach, TbMountain, TbPool} from "react-icons/tb";
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCampingTent,
    GiCastle,
    GiCaveEntrance,
    GiIsland,
    GiWindmill
} from "react-icons/gi";
import {MdOutlineVilla} from "react-icons/md";
import OptionBox from "@/app/components/OptionBox";
import {usePathname, useSearchParams} from "next/navigation";
import {FaSkiing} from "react-icons/fa";
import {BsSnow} from "react-icons/bs";
import {BiSolidDiamond} from "react-icons/bi";

export const options = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Camping',
        icon: GiCampingTent,
        description: 'This property has camping activities!'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property has snow falls!'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in a cave!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in the barn!'
    },
    {
        label: 'Lux',
        icon: BiSolidDiamond,
        description: 'This property is luxurious!'
    }
]

const OptionsTab = () => {
    const params = useSearchParams();
    const option = params?.get('option');
    const pathname = usePathname();

    const isManinPage = pathname === '/';

    if(!isManinPage){
        return null;
    }

    return(
      <Container>
          <div
          className="
           pt-4
           flex
           flex-row
           items-center
           justify-between
           overflow-x-auto
           "
          >
              {options.map((item)=>(
                  <OptionBox
                      key={item.label}
                      label={item.label}
                      selected={option === item.label}
                      icon={item.icon}
                  />
              ))}
          </div>
      </Container>
    );
}

export default OptionsTab;