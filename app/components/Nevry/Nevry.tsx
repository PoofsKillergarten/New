import { Fragment } from "react";
import classes from './Nevry.module.scss';

const Nevry = (props: any) => {
    


    
    return (
    <div
    style={{
        width: '100%',
        height: props.h,
        display:'flex',
        justifyContent: 'space-around'
    }}><div 
        className={`${classes.nevry}  ${props.bck === 1 && classes.bbrown}
         ${props.bck === 2 && classes.bgold}  ${props.bck === 3 && classes.bpurple}`}
        style={{
            width: props.w,
            height: '100%'
        }}
       >
  {props.children}
     
        </div>
        </div>
   
    );
}

export default Nevry;