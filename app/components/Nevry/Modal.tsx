import { Fragment } from "react";
import classes from './Modal.module.scss';
import Button from "../UI/Button";

const Modal = (props: any) => {
    
    const clickH = () => {
      if (typeof window !== 'undefined') {
      const audio = new Audio('/music/se/Cancel1.ogg');
      audio.play();
      }
      if (typeof window !== 'undefined') {
      localStorage.removeItem('stop');
      }
      console.log(1);
        if(props.click){
            props.click();
        }
    }
    
    
    return (
   <div 

   style={{
    display: props.visible ? 'flex' : 'none'
   }}
 
   className={`${classes.blackout}  ${props.inner && classes.outsider}`}>
    <div className={`${classes.modal}  ${props.transparent && classes.transparent}  ${props.inner && classes['modal-outer']}`}>{props.children}</div>
      <div style={{
        position:'absolute',
        height: '100%',
        width: `100%`,
            
        zIndex:1
      }} onClick={clickH}></div>
   </div>
    );
}

export default Modal;