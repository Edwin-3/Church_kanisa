import './App.css';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Hero from './components/Header/Hero';
import Events from './components/Upcoming/Events';
import Wheel from './components/Wheel/Wheel';

function App() {
  return (
    <div className="App">
      <Hero />
      <Experience />
      <Events />
      <Wheel />
      <Footer />
    </div>
  );
}

export default App;
