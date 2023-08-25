'use client';
import { Fragment, useRef, useState } from "react";
import classes from '../../guides/guides.module.scss';
import Button from "../UI/Button";
import Modal from "./Modal";


const Miniguides = (props: any) => {
   const [modal,setModal] = useState<any>();
   const closeModal = (e: any) => {
    // console.log(1);
    setModal(null);
  }
  const getChildren = (e: any) => {
    //  setModal(e.target);
    if (typeof window !== 'undefined') {
    const audio = new Audio('/music/se/Cursor2.ogg');
    audio.play();
    }
    let child;
  
     

            child = 
            <div className={classes.modalGuide}
            ><img className={classes.modalGuideImg} src={`/pictures/items/${props.file}`} />
            <div className={classes.modalGuideCont}>
                <div className={classes.modalGuideDesc}>
                    {props.description}</div>
            </div>
            </div>;
           

    if(child != undefined){
        setModal(child);
    }
 
    console.log(e);
  }
  const overH = () => { 
    if (typeof window !== 'undefined') {
    const audio = new Audio('/music/se/Cursor1.ogg');
    audio.play();
    }
  }
    return (
        <Fragment>
        {modal && <Modal inner={true} transparent={true} click={closeModal} visible={modal && true}>{modal}</Modal>}
        <div onClick={getChildren} onMouseOver={overH} className={classes['mini-guide']}>
        <div className={classes['guide-img']}
        style={{
          backgroundImage: `url(/pictures/items/${props.file})`
        }}
        ></div>
        {/* <div className={classes['guide-text']}>{files[i]}</div> */}
      </div>
      </Fragment>
    );
}

export default Miniguides;