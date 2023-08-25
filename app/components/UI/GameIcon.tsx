'use client';
import { Fragment, useEffect, useState } from "react";
import classes from './GameIcon.module.scss';
// import Transition from 'react-transition-group/Transition';
// import Cursor from ;

const GameIcon = (props: any) => {
    const [selGame, chGame] = useState(false);
    useEffect(()=>{
       if(props.starting === true){
        chGame(true);
       }else{
        chGame(false);
       }
             
        
    },[selGame, props.starting])

    const clickH = (e: any) => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Key.ogg');
        audio.play();
        }
        props.func(props.id);
    }
    const overH = (e: any) => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Cursor1.ogg');
        audio.play();
        }
   
    }

    
     return (
        <Fragment>
    
       <div onClick={clickH} onMouseOver={overH} className={`${classes.icon}  ${selGame && classes['icon--selected']}`}
        style={{
            backgroundImage: `url(/pictures/icons/${props.img}.png)`

        }}
       >
       
       </div>
       </Fragment>
     );
}

export default GameIcon;