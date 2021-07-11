import NavBar from './components/NavBar'
import './App.scss';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <span className="circle-1"></span>
      <span className="circle-2"></span>
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
