'use client';
import classes from './passwords.module.scss';
import BodyWrapper from "../components/Elements/BodyWrapper";
import Nevry from "../components/Nevry/Nevry";
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Inscriber from '../components/Nevry/Inscriber';
import { useEffect, useRef, useState } from 'react';


const Index = (ref: any) => {
   const [inp,setInpProp] = useState(false);
   const [clear,setClear] = useState(false);
   const [pass,setPass] = useState('');
   const [per,setPer] = useState('');
    const getChar = (e: any) => {
        // console.log(e);
        setInpProp(!inp);
        setPer(e);
    }
    const clearForm = () => {
        
        setPer('');
        setClear(true);
        setTimeout(()=>{
            setClear(false);
        },100);
    }
    const updateText = (e: any) => {
        setPass(e + per);
     
    }

   

    return (
        <BodyWrapper overflow={true}>
            
          <Nevry bck={3} w={"95%"} h={"90vh"}>
            <div className={classes['main-container']}>
            <div className={classes.container1}>
            <Input clear={clear} update={updateText} inprop={inp} type={'text'} text={'INPUT PASSWORD'} elm={per}/>
            <div style={{
                transform: 'scale(1.5)'
            }}>
            <Button click={clearForm} title={'CONFIRM'}/>
            </div>
            </div>
            <div className={classes.container2}>
            <Inscriber click={getChar} />
            </div>
            </div>
    
      </Nevry>
        </BodyWrapper>
    );
    }
    
    export default Index;