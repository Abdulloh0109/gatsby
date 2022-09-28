import React from 'react';
import * as cls from "./headers.module.scss"
import {menu} from "../../configs/menu"
import {Logo} from "../../configs/constans";
const Header = () => {
    return (
        <div className={cls.root}>
            <ul className={cls.header}>
               <span className={cls.logo}>{Logo}</span>
                <div className={cls.navMenu}>
                    {menu.map((item) => (
                        <li className={cls.navItem} key={item.id}>{item.title}</li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default Header;