import Technology from './Technology';
import './Project.scss'

const Project = (props) => {
  console.log(props.project.technologies);
  return (
    <div className="project card my-3 p-3 m-2">
      <h5 className="card-title">{props.project.title}</h5>
      <p className="card-text card-description">{props.project.description}</p>
      <p className="card-text card-technologies">
        {props.project.technologies.map(
          (technology) => <Technology name={technology} />
        )}
      </p>
      <div className="forms d-flex">
        <form className = "form-project-github" action="./details/detail-tic-tac-toe.html" target="_blank" method="get">
          <button className="button m-4" type="submit">
            GitHub
            <span className="button__horizontal"></span>
            <span className="button__vertical"></span>
          </button>
        </form>
        <div className="div-live">
          <form className = "form-project-live" action="./details/detail-tic-tac-toe.html"  target="_blank" method="get">
            <button className="button m-4" type="submit">
              Live
              <span className="button__horizontal"></span>
              <span className="button__vertical"></span>
            </button>
          </form>
        </div>
      </div>
      <img className="card-img" src={props.project.image} alt="Project" />
    </div>
  )
}

export default Project;