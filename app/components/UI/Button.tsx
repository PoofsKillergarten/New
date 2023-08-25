'use client';
import { Fragment, useState } from "react";
import classes from './Button.module.scss';
// import Transition from 'react-transition-group/Transition';
// import Cursor from ;

const Button = (props: any) => {
    const [hover,setHover] = useState<boolean>(false);
    const overHandler = (): void => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('music/se/Cursor1.ogg');
        audio.play();
        }
        setHover(true);
      
    }
    const outHandler = (): void => {
        setHover(false);
      
    }
    const clickHandler = (): void => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('music/se/Cursor2.ogg');
        audio.play();
        }
        if(props.click){
            props.click();
        }
      
    }
    // const [hover,setHover] = useState<boolean>(false);
    return (
    
        <button onMouseOut={outHandler} onClick={clickHandler} onMouseOver={overHandler} className={classes.btn}>
           <div className={`${classes.decor}  ${hover && classes.decorHover}`}/>
            {props.title}
        </button>
     
    );
}

export default Button;