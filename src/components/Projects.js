import Project from "./Project";
import projects from "./Projects.data";
import './Projects.scss'

const Projects = () => {
  return (
    <>
      <h3 className="projects-title card mx-3 mt-5 px-3">Projects</h3>
      <div className="projects">
        { projects.map((project, index) => <Project key={index} project={project} /> ) }
      </div>
    </>
  );
}

export default Projects;