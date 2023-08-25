'use client';
import { Fragment, useRef, useEffect, Suspense, lazy } from "react";
import classes from './Vid.module.scss';
import ReactPlayer from "react-player";
// import ;



const Vid = (props: any) => {
   const clickH = (e: any) => {
    if(props.click){
        props.click({
            isRemoved: true,
            element: 'video',
            muted: props.muted,
            url: props.url
        });
    }
 
   }
  
    
// console.log(props.muted);
    return (

        <div onClick={clickH} className={classes.iframe} style={{
            width: props.w ? props.w : 'auto',
            height: props.h ? props.h : 'auto',
            transform: props.t === 2 ? 'scale(2)' : '' 
          
            
        }}>
            <div className={classes.decor}></div>
        <ReactPlayer
        url={props.url}
        playing={true} // Autoplay
        controls={props.controls != undefined ? props.controls : false} // Show video controls
        muted={props.muted != undefined ? props.muted : true} // Mute the video (required for many browsers' autoplay)
        loop={true}
        style={{
            transform: props.t === 1 ? 'scaleX(.8) translate(-19%)' : ''
          
        }}
      />
        </div>
    
    );
}

export default Vid;