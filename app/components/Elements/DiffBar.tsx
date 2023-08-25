import { Fragment, useEffect, useState } from 'react';
import classes from './BodyWrapper.module.scss';

const DiffBar = (props: any) => {
    const [appear, setAppear] = useState(false);
    useEffect(()=>{
        setAppear(false);
        setTimeout(()=>{
            setAppear(true);
        },200)
    },[props.amnt]);

    const ar = [];
    for(let i = 0; i < props.amnt; i++){
        ar.push(<div style={{
            opacity: appear ? 1 : 0
        }} className={classes.skull} />);
    }
    return (
        <div className={classes.container}>
            <div className={classes.name}>Difficulty</div>
        <div className={classes.skullbar}>
        {ar}
        </div>
        </div>
    );

}

export default DiffBar;