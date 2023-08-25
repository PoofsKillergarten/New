'use client';
import { useEffect, Fragment } from "react";
import classes from './GameCard.module.scss';
import Card from "./Card";
import Button from "../UI/Button";
import Link from "next/link";


const GameCard = (props: any) => {
    
    const its = props.items;
 
    const clickH = (): void => {
      if (typeof window !== 'undefined') {
      const audio = new Audio('/music/se/Cursor2.ogg');
      audio.play();
      }
      if (typeof window !== 'undefined') {
        // Perform localStorage action
        localStorage.setItem('token',its.id);
      }
  
      
    }
    const overH = (): void => {
      if (typeof window !== 'undefined') {
      const audio = new Audio('/music/se/Cursor1.ogg');
      audio.play();
      }
      
    }
    return (
  <Card interactable={true}>
    <Link onMouseOver={overH} onClick={clickH} href='/games' style={{
        height: '400px',
        width: '250px'
    }}

    className={classes.gcard} >
      {its.isNew && <div className={classes.new}>New</div>}
        <div className={`${classes.gelm}  ${classes.title}`}>{its.title}</div>
        <div className={`${classes.gelm}  ${classes.pic}`} style={{
            background: `url(${its.picture}) center/cover no-repeat`
        }}></div>
        <div className={classes.gelm}></div>
        {/* <div className={`${classes.gelm}  ${classes.desc}`}>{its.desc}</div>
        <div className={`${classes.gelm}  ${classes.plat}`}>{its.platform}</div> */}
        {/* <Button title={'PLAY'}/> */}
    </Link>
  </Card>
    );
}

export default GameCard;