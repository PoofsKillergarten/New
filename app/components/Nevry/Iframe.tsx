import { Fragment } from "react";
import classes from './Iframe.module.scss';
import Button from "../UI/Button";

const Iframe = (props: any) => {
    


    
    return (
   <iframe style={{
    width: props.w ? props.w : '',
    height: props.h ? props.h : ''
   }} src={props.src} className={classes.iframe}>
    
   </iframe>
    );
}

export default Iframe;