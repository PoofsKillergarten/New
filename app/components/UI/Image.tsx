'use client';
import { Fragment, useEffect, useState } from "react";
import classes from './Image.module.scss';
import Button from "./Button";
// import Transition from 'react-transition-group/Transition';
// import Cursor from ;

const Image = (props: any) => {
    const [appear,setAppear] = useState(false);
    useEffect(()=>{
     setAppear(false);
     setTimeout(()=>{
         setAppear(true);
     },50)
 },[props.image]);
     return (
       <div style={{
               opacity: appear ? 1 : 0,
            width: props.w,
            height: props.h,
            background: `url(${props.image}) center/cover no-repeat`,
            zIndex:1,
            position: 'absolute',
            left: props.posx,
            top: props.posy ? props.posy : 'auto'
           
       }} className={classes.img}>
      
       </div>
     );
}

export default Image;