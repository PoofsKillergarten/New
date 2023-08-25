'use client';
import Link from 'next/link';
import classes from './Guides.module.scss';

const Guide = (props: any) => {
    
    const clickH = (e: any) => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Cursor2.ogg');
        audio.play();
        }
   
    }
    const overH = (e: any) => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Cursor1.ogg');
        audio.play();
        }
   
    }
    
    
    return (
        <Link onClick={clickH} onMouseOver={overH} href={props.locked ? `#` : `guides/${props.link}`} className={`${classes.guide}  ${props.locked && classes['guide--locked']}`}
        style={{
            backgroundImage: props.pic
        }}>
            {props.locked && <div className={classes.lock}></div>}
        <div className={classes.title}>
            {props.title}
        </div>

   
       </Link>
    );

}

export default Guide;