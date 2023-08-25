'use client';
import { Fragment } from "react";
import classes from './NavHeader.module.scss';
import { useRouter } from "next/navigation";
import Link from "next/link";


const Nav = (props: any) => {
  const router = useRouter();
    const overHandler = (): void => {
      if (typeof window !== 'undefined') {
        const audio = new Audio('/music/se/Cursor1.ogg');
        audio.play();
      }
    }
    const clickHandler = (): void => {
      if (typeof window !== 'undefined') {
      const audio = new Audio('/music/se/Cursor2.ogg');
      audio.play();
      }
      if(props.link){
        router.push(props.link);
      }
    }
    return (
      <nav onMouseOver={overHandler} onClick={clickHandler} style={{
        width: (100/props.wid) + '%',
        backgroundImage: props.pic && `url(${props.pic})`,
        backgroundSize: '30%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className={props.class}>{props.title}
    
      </nav>
    );
}

export default Nav;