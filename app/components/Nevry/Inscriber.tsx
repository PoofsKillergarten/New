'use client';
import { Fragment, useRef } from "react";
import classes from './Inscriber.module.scss';
import Button from "../UI/Button";

const Inscriber = (props: any) => {
    const overH = (e: any) => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('music/se/Cursor1.ogg');
        audio.play();
        }
    }
    const getChar = (e: any)=>{
        if (typeof window !== 'undefined') {
        const audio = new Audio('music/se/Cursor2.ogg');
        audio.play();
        }
        if(props.click){
            props.click(e.target.textContent);
        
        }
    }
    const m = useRef();
    const symbols: string[] = [
        '∞','¤','♦','⌂','╬','§','¥','Ω','Φ'
    ];
    const divs: any = [];
    for(let i = 0; i < 9; i++){
        divs.push(<div onClick={getChar} className={classes.btn}><div onMouseOver={overH} className={classes.symbol}>{symbols[i]}</div></div>);
    }
    return (
   <div className={classes.cont}>
    {divs}
   </div>
    );
}

export default Inscriber;