import Technology from './Technology';
import './Project.scss'

const Project = (props) => {
  return (
    <div className="project card my-4 p-3 m-2">
      <h3 className="card-title">{props.project.title}</h3>
      <p className="card-text card-description">{props.project.description}</p>
      <div className="card-text card-technologies">
        {props.project.technologies.map(
          (technology, index) => <Technology key={index} name={technology} />
        )}
      </div>
      <div className="forms d-flex">
        <form className = "form-project-github" action={props.project.github} target="_blank" method="get">
          <button className="button m-4" type="submit">
            GitHub
            <span className="button__horizontal"></span>
            <span className="button__vertical"></span>
          </button>
        </form>
        {props.project.api ? (
          <div className="div-live">
            <form className = "form-project-api" action={props.project.api} target="_blank" method="get">
              <button className="button m-4" type="submit">
                Github - API
                <span className="button__horizontal"></span>
                <span className="button__vertical"></span>
              </button>
            </form>
          </div>) : ''}
        {props.project.live ? (
          <div className="div-live">
            <form className = "form-project-live" action={props.project.live} target="_blank" method="get">
              <button className="button m-4" type="submit">
                Live
                <span className="button__horizontal"></span>
                <span className="button__vertical"></span>
              </button>
            </form>
          </div>) : ''}
      </div>
      <img className="card-img mt-3" src={props.project.image} alt="Project" />
    </div>
  )
}

export default Project;