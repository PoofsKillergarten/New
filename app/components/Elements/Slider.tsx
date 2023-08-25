import { Fragment, useEffect, useState } from "react";
import classes from "./Slider.module.scss";

const Slider = (props: any) => {
    const [posx,setPos] = useState(0);
    const amnt = props.amnt;
    const ar = [];
    const cnt = [];
    useEffect(()=>{
        setPos(0);
    },[props.images])
    for(let i = 0; i < amnt; i++){
        ar.push( 
             <div 
             style={{
                backgroundImage: `url(/pictures/game-images/${props.images[i]})`
             }}
             className={classes.slide}></div>
             );
    }
    for(let i = 0; i < amnt; i++){
      const p = posx != 0 ? posx / -100 : posx;
      cnt.push(
        <div className={`${classes.count}  ${p === i && classes['count--targeted']}`}></div>
      );
    }
    const arrowRight= ()=>{
      if (typeof window !== 'undefined') {
      const audio = new Audio('music/se/Cursor1.ogg');
      audio.play();
      }
        const position = posx - 100;
        if(posx > (-100 * (amnt - 1))){
            setPos(position);
            props.func(posx != 0 ? (posx / -100) + 1: posx + 1);
        }else{
            setPos(0);
            props.func(0);
        }
     
  
    }
    const arrowLeft = ()=>{
      if (typeof window !== 'undefined') {
      const audio = new Audio('music/se/Cursor1.ogg');
      audio.play();
      }
        const position = posx + 100;
        if(posx < 0){
            setPos(position);
            props.func(posx != 0 ? (posx / -100) - 1: posx - 1);
           
        }else{
            setPos((-100 * (amnt - 1)));
            props.func(amnt - 1);
            
        }

      
    }

  return (
    <div className={classes.slider}>
      <div className={classes.counter}>
      {cnt}
      </div>
      <div className={classes.arrows}>
        {!props.noslide && <div onClick={arrowLeft} className={`${classes.arrow}  ${classes["arrow--left"]}`}>‹</div>}
        {!props.noslide && <div onClick={arrowRight} className={`${classes.arrow}  ${classes["arrow--right"]}`}>‹</div>}

      </div>
      
      <div className={classes.slides}
      style={{
        width: (amnt * 100) + '%',
        left: posx + '%'
      
      }}>
          
        {ar}
        </div>
    </div>
  );
};

export default Slider;
