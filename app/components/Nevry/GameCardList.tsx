'use client';
import { Fragment, useState } from "react";
import classes from './GameCardList.module.scss';
import GameCard from "./GameCard";

// import Transition from 'react-transition-group/Transition';
// import Cursor from ;

const GameCardList = (props: any) => {
    

  const games: any[] = props.games;
    
     return (
       <div style={{
            width: (props.games.length * 300) + 'px'  
            }}
       className={classes.listI}>
        
         {games.map(val => <GameCard
         key={val.id}
         items={{
            id: val.id,
            title: val.title,
            desc: val.desc,
            picture: val.picture,
            platform: val.platform,
            isNew: val.isNew
         }}
         />)}
         
         {/* <Button title={'Manat'} /> */}
       </div>
     );
}

export default GameCardList;