import './AboutMe.scss'

const AboutMe = () => {
  return (
    <div className="about-me card mx-auto mt-3">
      <h1 className="pt-0 mb-0">Angel Barros</h1>
      <h4 className="pb-1">Full Stack Developer</h4>
      <p className="w-75 m-auto text-center pb-3">
        I enjoy solving problems, learning new things and helping the people I care about.<br/>
        I am currently improving my coding skills at <a href="https://www.microverse.org/" target="_blank" rel="noopener noreferrer"><strong>Microverse</strong></a>.</p>
      <table className="table table-sm w-100 w-md-50 table-borderless m-auto">
        <thead>
          <tr>
            <th>Language</th>
            <th>Frameworks</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ruby</td>
            <td>Ruby on Rails</td>
            <td>Github</td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>React</td>
            <td>TDD</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Redux</td>
            <td>Heroku</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Rspec</td>
            <td>Terminal</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Bootstrap</td>
            <td></td>
          </tr>
          <tr><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <section className="bottom-navbar d-flex space justify-content-around align-baseline">
        <nav className="desktop-navbar w-100 w-md-50 m-auto">
          <ul className="nav justify-content-center p-2">
            <li><a href="https://github.com/Zappat0n" target="_blank" rel="noopener noreferrer"><i className="fab fa-github p-3"></i></a></li>
            <li><a href="https://www.linkedin.com/in/angel-barros/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in p-3"></i></a></li>
            <li><a href="https://twitter.com/albarros1973" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter p-3"></i></a></li>
          </ul>
        </nav>
      </section>
  </div>
  );
}

export default AboutMe;