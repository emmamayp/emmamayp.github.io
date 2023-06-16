import "../styles/ProjectItem.css";
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectItem = ({image, name, link}) => {
    return (
        <div className="projectItem"> 
            <div className='container'>
                <div style={{backgroundImage: `url(${image})`}} className="bgImage" />                
                    <GitHubIcon sx={{ fontSize:50 }} className="btn" onClick={() => window.open(`${link}`)}></GitHubIcon>                
            </div>                       
            <h3>{name}</h3>
        </div>
    )
}
export default ProjectItem;