'use client';
import { useRouter } from 'next/navigation';

import Nav from './Nav';
import classes from './NavHeader.module.scss';
import { Fragment, useEffect } from "react";
if (typeof window !== 'undefined') {
    localStorage.removeItem('stop');
}
let bgm: any;
if (typeof window !== 'undefined') {
bgm = new Audio('/music/bgm/Theme2_quiet.ogg');
}
const NavHeader = () => {
    const router = useRouter();
    
    const navs = [
        {
            id: 1,
            title: 'GAMES',
            pic: null,
            link: '/games'
        },
        {
            id: 2,
            title: 'PASSWORDS',
            pic: null,
            link: '/passwords'
        },
        {
            id: 3,
            title: 'GALLERY',
            pic: null,
            link: '/gallery'
        },
        {
            id: 4,
            title: 'ANSWER!!',
            pic: null,
            link: '/stories'
        },
        {
            id: 5,
            title: 'GUIDES',
            pic: null,
            link: '/guides'
        },
        // {
        //     id: 6,
        //     title: '',
        //     pic: '/pictures/icons/login.png',
        //     link: '/login'
        // }
        
    ];
    const clickHandler = (): void => {
        if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Cursor2.ogg');
        audio.play();
        }
          router.push('/');
        
      }
   
      

      if(bgm != undefined){
        bgm.play();
      }
    
      useEffect(() => {
        setInterval(()=>{
           
                const win = window.location.toString();
                console.log(win);
                let a = '';
                let b = '';
                for(let i = 0; i < 11; i++){
                  a += win[win.length - (i + 1)];
                }
                for(let i = a.length - 1; i >= 0; i--){
                  b += a[i];
                }
                console.log(b);
                // console.log(bgm.seekable);
               
                if(localStorage.getItem('stop')){
                    bgm.pause();
                }else{
                    if(b === '/world_of_v'){
                        bgm.pause();
                    }else{
                        bgm.play();
                    }
                 
                }
            
            
        },5000);
    }, []);
    return (
        <Fragment>
            <header className={classes.header}>
                
                <h2 className={classes.nevry} onClick={clickHandler} style={{
                    position: 'relative'
                }}><img 
                style={{
                    position:'absolute',
                    left: '-35px',
                    top: '-10px'
                }}
                width="30px"src='/pictures/decorations/cryst.png'/>NEVRYCARDS</h2>
           
                <div className={classes.navbar}>
                    {navs.map(val => <Nav link={val.link} pic={val.pic} wid={navs.length} class={classes.nav} key={val.id} title={val.title}/>)}
                  
                </div>
            </header>
        </Fragment>
    );
}

export default NavHeader;