'use client';
import { Fragment, useEffect, useRef, useState } from "react";
import classes from '../../guides/guides.module.scss';
import Button from "../UI/Button";
import Modal from "./Modal";
import { get } from "http";


const Minicharacters = (props: any) => {
   const [modal,setModal] = useState<any>();
  //  const [show, setShow] = useState(false);
   const [desc, setDesc] = useState('');
   const closeModal = () => {
    setDesc('');
    setModal(null);
  }
  const overH = (e: any) => {
    if (typeof window !== 'undefined') {
    const audio = new Audio('/music/se/Cursor1.ogg');
    audio.play();
    }

  }

  const clickH = (e: any) => {
    if (typeof window !== 'undefined') {
    const audio = new Audio('/music/se/Cursor2.ogg');
    audio.play();
    }
    const data = e.currentTarget.querySelector('.skill-name').innerHTML;
    const id = e.currentTarget.id;
    let description;
    if(id === 'original'){
      for(let i = 0; i < props.content.original.length; i++){
        if(props.content.original[i].title === data){
          // console.log(`${props.content.original[i].desc}  ${data}`);
          description = props.content.original[i].desc;
      
        }
      }

    }
   
    if(id === 'dividedFate'){
      for(let i = 0; i < props.content.dividedFate.length; i++){
        if(props.content.dividedFate[i].title === data){
          description = props.content.dividedFate[i].desc;
        }
      }
    }
  
    if(id === 'nextTime'){
      for(let i = 0; i < props.content.nextTime.length; i++){
        if(props.content.nextTime[i].title === data){
          description = props.content.nextTime[i].desc;
        }
      }
    }

    // console.log(description);
    setDesc(description);
   

  }
  useEffect(()=>{
    if(desc != ''){
      closeModal();
      getChildren();
    }

  },[desc]);
  const getChildren = () => {
    if (typeof window !== 'undefined') {
    const audio = new Audio('/music/se/Cursor2.ogg');
    audio.play();
    }
    //  setModal(e.target);
    let child;
    const orig: any[] = props.content.original;
    const fate: any[] = props.content.dividedFate;
    const next: any[] = props.content.nextTime;
     

            child = 
            <div className={classes.modalCharacter}
            >        
              <img className={classes.modalCharacterImg} src={`/pictures/characters_skills/${props.file}`} />
              <div className={`${classes.nametag}  ${classes['nametag--inner']}`}>{props.content.name}</div>
              {desc != '' && <div className={classes.skillDesc}>{desc}</div>}
            <div className={classes.modalCharacterCont}>
              {(props.content && props.content.original && props.content.original.length != 0) && 
                <div className={classes.modalCharacterDesc}>
                <div className={classes.gameTitle}>Original</div>
                <div className={classes.skills}>
                  {orig.map(val => <div id='original' onMouseOver={overH} onClick={clickH} className={classes.skill}>
                  <div className={classes.skillPic}></div>
                  <div className={`skill-name  ${classes.skillName}  ${val.title.length > 9 && classes[`skillName--smaller`]}`}>{val.title}</div>
                  <div className={classes.skillLevel}>{val.lv}</div>
                  <div style={{
                    color: `${val.cost.s === 'mp' ? 'aqua' : val.cost.s === 'p' ? 'violet' : val.cost.s === 'tp' && 'lime'}`
                  }} className={classes.skillCost}>{val.cost.c}</div>
                </div>)}
                
                </div>
              
                </div>}
              
                {(props.content.dividedFate && props.content.dividedFate && props.content.dividedFate.length != 0) && 
                <div className={classes.modalCharacterDesc}>
                <div className={classes.gameTitle}>Divided Fate</div>
                <div className={classes.skills}>
                  {fate.map(val => <div id='dividedFate' onMouseOver={overH} onClick={clickH} className={classes.skill}>
                  <div className={classes.skillPic}></div>
                  <div className={`skill-name  ${classes.skillName}  ${val.title.length > 9 && classes[`skillName--smaller`]}`}>{val.title}</div>
                  <div className={classes.skillLevel}>{val.lv}</div>
                  <div style={{
                    color: `${val.cost.s === 'mp' ? 'aqua' : val.cost.s === 'p' ? 'violet' : val.cost.s === 'tp' && 'lime'}`
                  }} className={classes.skillCost}>{val.cost.c}</div>
                </div>)}
                
                </div>
              
                </div>}
                {(props.content.nextTime && props.content.nextTime && props.content.nextTime.length != 0) && 
                <div className={classes.modalCharacterDesc}>
                <div className={classes.gameTitle}>Next Time</div>
                <div className={classes.skills}>
                  {next.map(val => <div id='nextTime' onMouseOver={overH} onClick={clickH} className={classes.skill}>
                  <div className={classes.skillPic}></div>
                  <div className={`skill-name  ${classes.skillName}  ${val.title.length > 9 && classes[`skillName--smaller`]}`}>{val.title}</div>
                  <div className={classes.skillLevel}>{val.lv}</div>
                  <div style={{
                    color: `${val.cost.s === 'mp' ? 'aqua' : val.cost.s === 'p' ? 'violet' : val.cost.s === 'tp' && 'lime'}`
                  }} className={classes.skillCost}>{val.cost.c}</div>
                </div>)}
                
                </div>
              
                </div>}

            </div>
            </div>;
           

    if(child != undefined){
        setModal(child);
    }
 
    // console.log(e);
  }
  console.log(`${props.id} : ${props.content}`);
    return (
        <Fragment>
        {modal && <Modal inner={true} transparent={true} click={closeModal} visible={modal && true}>{modal}</Modal>}
        <div onClick={getChildren} onMouseOver={overH} className={classes['mini-character']}>
          <div className={classes.nametag}>{props.content.name}</div>
        <div className={classes['character-img']}
        style={{
          backgroundImage: `url(/pictures/characters_skills/${props.file})`
        }}
        ></div>
        {/* <div className={classes['guide-text']}>{files[i]}</div> */}
      </div>
      </Fragment>
    );
}

export default Minicharacters;