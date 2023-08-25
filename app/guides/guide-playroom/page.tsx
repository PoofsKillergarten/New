
import classes from '../guides.module.scss';
import styles from './playroom.module.scss';
import BodyWrapper from "../../components/Elements/BodyWrapper";
import Nevry from "../../components/Nevry/Nevry";
import ImageGallery from '../../components/Elements/ImageGallery';
import Modal from '../../components/Nevry/Modal';

import ColorRect from '../../components/UI/ColorRect';
import Iframe from '../../components/Nevry/Iframe';
import Blackout from '../../components/UI/Blackout';
import GuidesList from '../../components/Elements/GuidesList';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Miniguides from '@/app/components/Nevry/Miniguides';



const Index = (ref: any) => {
  // const [modal,setModal] = useState();
  let modal;
  const setModal = (e: any) =>{
    modal = e;
  }
  const fs = require('fs');
  // fs.access('public/pictures/items', fs.constants.R_OK, (err: any) => {
  //   console.log('\n> Checking Permission for reading the file');
  //   if (err)
  //     console.error('No Read access');
  //   else
  //     console.log('File can be read');
  // });
  const files = fs.readdirSync('./app/assets/items');

  const miniguides: any = []; 
  for(let i = 0; i < files.length; i++){
    miniguides.push(
      <Miniguides file={files[i]}/>
    );
   }
   const steps_data = [
      {
        title: 'Getting Supplies',
        img: 'url(https://img.itch.zone/aW1nLzgzOTMzODYucG5n/original/BgglSV.png)',
        desc: 'Once you started the game and ended up in playroom. First thing to do is heading to upper right corner of the room and interacting with the blonde kid. He will give you 12 pizzas to heal and some colas.'
      },
      {
        title: 'How to grind',
        img: 'url(https://sp.rmbl.ws/s8/6/g/R/l/v/gRlvh.oq1b.jpg)',
        desc: `Enemies that you need to start figthing first are
        yellow chunks. Remember to use skills in the battle and
        heal with pizzas when needed. Soon you will be able to fight
        blue chunks.`
      },
      {
        title: 'Defeat Partyhat',
        img: 'url(https://i.ytimg.com/vi/tVttjUe56-U/sddefault.jpg)',
        desc: `Once you reach level 5 and learn ability called "Rattle Slash",
        it's safe to fight Party Hat and use the skill to defeat it.`
      },
      {
        title: 'Escape Playroom',
        img: 'url(https://img.itch.zone/aW1nLzgzOTI4MDMucG5n/original/1xFhgm.png)',
        desc: `After defeating parth hat, scroll the shop in search for item called "Carpet" and use it
        on camera in the upper left corner of the room. You can safely exit playroom now.`
      }
   ]
   const steps: any = [];
    for(let i = 0; i < steps_data.length; i++){
      steps.push(
        <div className={styles.stepFrame}>
          <div className={`${styles.arrow}  ${i % 2 === 0 && styles['arrow--bot']}`}>{i != 0 && '►'}</div>
          <div className={`${styles.number}  ${i % 2 === 0 && styles['number--bot']}`}>{i + 1}</div>
          <div className={styles.stepTitle}>{steps_data[i].title}</div>
          <div style={{
            backgroundImage: steps_data[i].img
          }} className={styles.stepImg}></div>
          <div className={styles.stepDesc}>{steps_data[i].desc}</div>
        </div>
      );
    }
    const clickH = () => {
      if (typeof window !== 'undefined') {
      const audio = new Audio('/music/se/Cursor2.ogg');
      audio.play();
      } 
  
     }
    return (
        <BodyWrapper overflow={true}>
              
         
            <Link href={'/guides'} className={classes.return} >‹Return</Link>
          <Nevry bck={3} w={"95%"} h={"90vh"}>
          <div className={classes.container1}>
            <div className={styles.playroomtainer}>
            <div className={styles.playroom1}>Steps how to beat Playroom</div>
            <div className={styles.playroom2}>
              {steps}
            </div>
    

            </div>
          </div>
          
          </Nevry>

      <Blackout/>
        </BodyWrapper>
    );
    }
    
    export default Index;