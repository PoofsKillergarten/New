'use client';
import { Fragment, useState } from "react";
import classes from './ButtonsList.module.scss';
import Button from "./Button";
// import Transition from 'react-transition-group/Transition';
// import Cursor from ;

const ButtonsList = (props: any) => {
    


    
     return (
       <div style={{
            height: (props.buttons.length * 60) + 'px'  
            }}
       className={classes.list}>
         <div className={classes.ul}>
         {props.buttons}
         </div>
         {/* <Button title={'Manat'} /> */}
       </div>
     );
}

export default ButtonsList;