import './App.css';
import Experience from './components/Experience/Experience';
import Hero from './components/Header/Hero';
import Events from './components/Upcoming/Events';

function App() {
  return (
    <div className="App">
      <Hero />
      <Experience />
      <Events/>
    </div>
  );
}

export default App;
