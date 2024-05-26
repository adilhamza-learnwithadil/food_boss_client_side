// import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    
    return (
        <div className="my-20">
            <SectionTitle smallTitle='---Check it out---' title='FROM OUR MENU'></SectionTitle>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 gap-y-10 mt-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;