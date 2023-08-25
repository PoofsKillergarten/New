import { Fragment, useEffect, useState } from "react";
import classes from "./Slider.module.scss";
import Slider from "./Slider";

const SliderDesc = (props: any) => {
    const [text,setText] = useState('');
   const indexElm = (e: any) => {
    let elm = e;
    

    setText(props.text[elm]);
       }
       const clickH = (e: any) => {
        if(props.click){
     
            props.click({
                isRemoved: false,
                element: 'slider',
                images: props.images,
                amnt: props.amnt,
                text: props.text
            });
        }
   
   }
   useEffect(()=>{
    if(props.text){
    setText(props.text[0]);
    // console.log(1);
}
   },[props.text]);
  return (
    <Fragment>
        <div >
        <Slider noslide={props.noslide} func={indexElm} images={props.images} amnt={props.amnt}/>
        <div onClick={clickH} className={`${classes.slider}  ${classes['slider--desc']}`}>
        <div className={classes.desc}>
           {text}
                   
        </div>
 </div>
 </div>
    </Fragment>
  );
};

export default SliderDesc;
