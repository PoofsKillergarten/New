import classes from './Background.module.scss';

const Background = (props: any) => {

    return (
       <div
        style={{
            width: props.w,
            height: props.h,
            backgroundImage: `url(/pictures/backgrounds/${props.img}.png)`,
            borderRadius: props.radius ? props.radius : 'none'
        }}
        className={classes.background}
       >

       </div>
    );

}

export default Background;