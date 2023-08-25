import { Fragment } from 'react';
import classes from './ImageGallery.module.scss';

const ImageGallery = (props: any) => {
    const {amnt, images} = props;
    let max = amnt;
    let full = Math.floor(max / 4);
    let min = max % 4;
    const clickH = (e: any) => {
  
            props.click({
                element: 'image',
                img: e.target.currentSrc
            });
    }
    const imager = [];
    let index = 0;
    for(let j = 0; j <= full; j++){

    const imgs = [];
    let c = 4;
    if(j === full){
        c = min;
    }
    for(let i = 0; i < c; i++){
        imgs.push(<img onClick={clickH} className={classes.gal} src={images[index]} />);
        index++;
    }
    imager.push(<div className={classes.imager}>{imgs}</div>);
    }
    return (
        <Fragment>
        <div className={classes.gall2}>
       <div className={classes.gallery}>
        {imager}

       </div>
       <div className={classes.wider}></div>
       </div>
       </Fragment>
    );

}

export default ImageGallery;