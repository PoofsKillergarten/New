import { Fragment, useEffect, useRef, useState } from 'react';
import classes from './Input.module.scss';

const Input = (props: any,ref: any) => {
    const r = useRef<any>();
    const [valid,setValider] = useState(0);
    const [text,setText] = useState('');

    const updateText = () => {
        if(props.update){
            console.log(2);
            props.update(r.current.value);
        }
    }
    function download(fileUrl: string, fileName: string) {
        var a = document.createElement("a");
        a.href = fileUrl;
        a.setAttribute("download", fileName);
        a.click();
      }
    useEffect(()=>{
        updateText();
        const res: any = r.current;
        if(res != undefined){
        if(res.value.length < 13){
            res.value = res.value + props.elm;
        }
        if(props.clear === true){
    
        let inbval = res.value.toUpperCase();
        switch(inbval){
    
            case 'FAAKBOAR':
     
                download("downloadable/Save02.rvdata2", "Save02.rvdata2");
                playCorrect();
              
            break;
            case 'W_O_V.,.,.**':

                download("downloadable/World_of_V.png", "World_of_V.png");
                playCorrect();
            break;
            case 'RUR!C()-01':
         
                download("downloadable/ACKNOWLEDGE.png", "ACKNOWLEDGE.png");
                playCorrect();
              
            break;
            case 'M@N-3ATER':
       
                download("downloadable/ZCP_File1.png", "ZCP_File1.png");
                playCorrect();
              
            break;
            case 'Y3CE:P:E:R':
              
                download("downloadable/KRIPI.odt", "KRIPI.odt");
                playCorrect();
              
            break;
            case 'V_^_^SINA':
             
                download("downloadable/V.GIF", "V.GIF");
                playCorrect();
            break;
            case 'G#LD$3N--P$99%':
           
                download("downloadable/GPOOF.png", "GPOOF.png");
                playCorrect();
            break;
            case '$0LDI3R':
             
                download("downloadable/FATE_POOF.png", "FATE_POOF.png");
                playCorrect();
            break;
            case 'C@RSK@RS':
            
                download("downloadable/FATE_CAPCAKE.png", "FATE_CAPCAKE.png");
                playCorrect();
            break;
            case 'S!A^T*A-N':
             
                download("downloadable/FATE_SONIA.png", "FATE_SONIA.png");
                playCorrect();
            break;
            case 'CUBUCUBUCUBU':
               
                download("downloadable/FATE_CUBUS.png", "FATE_CUBUS.png");
                playCorrect();
            break;
            case 'T3A-ZZARD':
           
                download("downloadable/FATE_TEALENA.png", "FATE_TEALENA.png");
                playCorrect();
            break;
            case 'ENGAGEALL':
            
                download("downloadable/Save04.rvdata2", "Save04.rvdata2");
                playCorrect();
            break;
            case 'ENR@G3M3NT':
             
                download("downloadable/Save05.rvdata2", "Save05.rvdata2");
                playCorrect();
            break;
            case '<3IS3IS3>':
             
                download("downloadable/Save03.rvdata2", "Save03.rvdata2");
                playCorrect();
            break;
            default:
                if (typeof window !== 'undefined') {
                const audio = new Audio('/music/se/Cancel1.ogg');
                audio.play();
                }
                setText('Invalid Password');
              
        }
        
          
            res.value = '';
        }
    }
    },[props.inprop,props.clear]);

    const playCorrect = () => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Item2.ogg');
        audio.play();
        }
        setText('Password is Correct');
      
       
       
    }
    useEffect(()=>{
        const times = setTimeout(()=>{
            setText('');
        },2000);

        return () => {
          
            clearTimeout(times);
            
        }
    },[text]);
    const changeH = ()=>{
        if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Cursor1.ogg');
        audio.play();
        }
        // console.log(r.current.value);
    }
    return (
        <Fragment>
             <div 
             style={{
                position: 'absolute',
                width: '100%',
                background: text != 'Invalid Password' ? 'lime' : 'red',
                padding: '1%',
                textAlign: 'center',
                fontSize: '3rem',
                color: 'white',
                borderRadius: '1000px',
                transition: 'all 1s ease-out',
                opacity: text === '' ? 0 : 1,
                top: text === '' ? '0%' : '-10%'
             }}
             className={`${classes.vaildator}  ${text != 'Invalid Password' && classes.vaild}  ${text === 'Invalid Password' && classes.invaild}`}>{text}</div>
             <div className={classes.inp}>
           
           <label className={classes.label} htmlFor={props.text}>{props.text}</label>
           
           <input onChange={changeH} maxLength={13} ref={r} className={classes.input} id={props.text} type={props.type}/>

       </div>
        </Fragment>
     
    );
}

export default Input;