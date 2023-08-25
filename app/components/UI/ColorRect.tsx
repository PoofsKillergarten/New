'use client';
import { useEffect, useState } from 'react';
import classes from './ColorElements.module.scss';
import Link from 'next/link';


const ColorRect = (props: any) => {
    const [appear, setAppear] = useState(false);
    const color_var = 150;
    const color1 = `rgb(${props.r - color_var >= 0 ? props.r - color_var :props.r},${props.g - color_var >= 0 ? props.g - color_var:props.g},${props.b - color_var >= 0 ? props.b - color_var:props.b})`;
    const color2 = `rgb(${props.r},${props.g},${props.b})`;
    
    useEffect(()=>{
        setAppear(false);
        setTimeout(()=>{
            setAppear(true);
        },200)
    },[props.children]);
        const clickH = () => {
            if(props.click){
                if (typeof window !== 'undefined') {
                const audio = new Audio('/music/se/Item2.ogg');
                audio.play();
                }
                props.click(props.download);
            }
        }
    return (
        <div className={classes.wrapper} onClick={clickH}
        style={{
            opacity: appear ? 1 : 0,
            // width: props.w ? props.w + 'rem' : 'auto',
            // height: props.h ? props.h + 'rem' : 'auto'
            width: props.w + 'rem',
            background: color1,
            borderRadius: props.radius,
        }}>
            <Link href={props.link ? props.link : ''}>
        <div style={{
            width: props.w ? props.w + 'rem' : 'auto',
            height: props.h ? props.h + 'rem' : 'auto',
            borderRadius: props.radius,
            background: `linear-gradient(124deg,${color1},${color2},${color1})`,
            border: `2px solid black`,
            fontSize: props.font
            
        }}  className={classes['color-elem']}>
            {props.children}
        </div>
        </Link>
        </div>
    );
}


export default ColorRect;