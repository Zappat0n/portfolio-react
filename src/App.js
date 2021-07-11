import NavBar from './components/NavBar'
import './App.scss';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import BottomBar from './components/BottomBar';

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
      <BottomBar />
    </div>
  );
}

export default App;
