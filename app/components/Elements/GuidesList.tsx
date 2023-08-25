
import Guide from './Guide';
import classes from './Guides.module.scss';


const GuidesList = (props: any) => {
    const ar = [];
    for(let i = 0; i < props.guides.length; i++){
        ar.push(<Guide key={i} locked={props.locked === i && true} link={props.guides[i].link} pic={`url(${props.guides[i].pic})`} title={props.guides[i].title} />);
    }

    return (
       <div className={classes.guides}>
        {ar}
       </div>
    );

}

export default GuidesList;