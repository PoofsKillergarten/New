import { Fragment, useState } from "react";
import classes from './Hnc.module.scss';
// import Transition from 'react-transition-group/Transition';
// import Cursor from ;

const Hnc = (props: any) => {
    const subs: any[] = props.subs;
    return (
        <Fragment>
        <div className={classes.cont}>
        <h1 className={classes.hnc}>{props.children}</h1>
            {subs && subs.map(val => val && <h1 className={`${classes[val.clas]}`}>{val.text}</h1>)}
        
               </div>
        </Fragment>
    );
}

export default Hnc;