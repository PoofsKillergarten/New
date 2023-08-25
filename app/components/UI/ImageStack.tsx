import { Fragment, useState } from "react";
import classes from './Image.module.scss';
import Image from "./Image";

// import Transition from 'react-transition-group/Transition';
// import Cursor from ;

const ImageStack = (props: any) => {
    const pims: any[] = props.images;
    const wid = Math.max(...pims.map(val => parseInt(val.w)));
    const wid2 = pims.map(val => parseInt(val.w)).indexOf(wid);
    const hid = Math.max(...pims.map(val => parseInt(val.h)));
    const hid2 = pims.map(val => parseInt(val.h)).indexOf(hid);
    // console.log(wid);
    // console.log(wid2);
    // console.log(hid);
    const image_array = [];
    for(let i = 0; i < props.images.length; i++){
        let val = props.images[i];
        image_array.push(
        <Image posx={((i - 0.4) * 200) + 'px'} key={val.id} w={val.w} h={val.h} image={val.url}/>
        );
    }
    // console.log(Math.max([3,5]));
     return (
       <div style={{
        width: props.images[wid2].w,
        height: props.images[hid2].h,
        zIndex:1


       }}>
          {image_array.map(val => 
          val
         )} 
       </div>
     );
}

export default ImageStack;