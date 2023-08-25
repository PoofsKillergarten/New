
import { Fragment, useEffect, useState } from "react";
import classes from './GameIcon.module.scss';
import GameIcon from "./GameIcon";
import { useDispatch, useSelector } from "react-redux";

// import Transition from 'react-transition-group/Transition';
// import Cursor from ;



const GameIconsList = (props: any) => {



    const clickH = (e: any) => {
    
        props.func(e);
    }
    const selectGame =  async (e: any) => {
        
   
    }
    // console.log(props.games);
//    useEffect(()=>{
  const pgs: any[] = props.games;
//    },[props.starting])
    const games = pgs.map(val => <GameIcon starting={val.on}
         func={clickH} 
         key={val.id} 
         id={val.id} 
         img={val.n}/>);

     return (
        
       <div className={classes.bar}>
       {games}
       </div>
    
     );
}

export default GameIconsList;