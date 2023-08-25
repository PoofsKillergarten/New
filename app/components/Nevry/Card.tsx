'use client';
import { Fragment, useState } from "react";
import classes from './Nevry.module.scss';
import Button from "../UI/Button";
import Decor from "./Decor";

const Card = (props: any) => {
    const [hover,setHover] = useState<boolean>(false);
    const hoverHandler = () => {
        setHover(true);
    }
    const outHandler = () => {
        setHover(false);
    }
    
    return (
   <div onMouseOver={hoverHandler} onMouseOut={outHandler} className={`${classes.card}  ${props.interactable && classes.mov}  ${props.shadow && classes.shadow}`}>
  
    {props.children}
      <Decor hover={hover}/>
   </div>
    );
}

export default Card;