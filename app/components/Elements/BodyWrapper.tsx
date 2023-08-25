import classes from './BodyWrapper.module.scss';

const BodyWrapper = (props: any) => {

    return (
        <div style={{
            overflow: props.overflow ? 'hidden' : 'none'
        }} className={classes.body}>{props.children}</div>
    );

}

export default BodyWrapper;