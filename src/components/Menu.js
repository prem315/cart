import React from "react";
import MenuItem from '../components/MenuItem';

const Menu = ({menu}) => {
  return (
    <div className="User">
        {
            menu.map((menu_item) => {
                return <MenuItem menu_item={menu_item} key={menu_item.menu_item_id}/>
            })
        }  
    </div>
  );
};

export default Menu;