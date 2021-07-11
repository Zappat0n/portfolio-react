import NavBar from './components/NavBar'
import './App.scss';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <span class="circle-1"></span>
      <span class="circle-2"></span>
      <AboutMe />
    </div>
  );
}

export default App;
