import classes from "./ProjectSet.module.css";

const ProjectSet = (props) => {
    return (
        <div className={classes.ProjectsSet}>
            <div className={classes.ProjectsSetImage}>
                <img src={props.image} alt="Project Prototype" />
            </div>

            <div className={classes.ProjectsSetText}>
                <p className={classes.ProjectsSetTag}>#{props.tag}</p>
                <p className={classes.ProjectsSetTitle}>{props.content}</p>
                <div className={classes.ProjectsSetActions}>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        See in action
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ProjectSet;
