import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css"
const Projects = () => {
    return (
        <div className="projects">
            <h2>My Personal Projects</h2>
            <div className="projectList">
            {ProjectList.map((project) => {
                return <ProjectItem name={project.name} image={project.image} link={project.link} />
            })}
            </div>
        </div>
    )
}
export default Projects;