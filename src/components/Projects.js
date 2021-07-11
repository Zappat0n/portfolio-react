import Project from "./Project";
import projects from "./Projects.data";
import './Projects.scss'

const Projects = () => {
  return (
    <div className="projects">
      { projects.map((project => <Project key={project.title} project={project} /> )) }
    </div>
  );
}

export default Projects;