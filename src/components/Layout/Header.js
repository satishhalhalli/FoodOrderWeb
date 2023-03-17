import React, { Fragment } from "react";
import mealsImage from '../../components/Assets/meals.jpg';

import classes from './Header.module.css';
const Header=props=>{
    return (<Fragment>
        <header className={classes.header}>
        <h1>React meals</h1>
        <button>Cart</button>
        </header >
        <div className={classes['main-img']}>

            <img src={mealsImage}/>
        </div>
    </Fragment>
    );
};
export default Header;