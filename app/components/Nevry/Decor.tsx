import { Fragment } from "react";
import classes from './Nevry.module.scss';
import Button from "../UI/Button";

const Decor = (props: any) => {
    


    
    return (
   <div className={`${classes.decor}  ${props.hover && classes.decorHover}`}>
  
   </div>
    );
}

export default Decor;