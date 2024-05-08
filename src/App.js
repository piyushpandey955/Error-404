// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Carousel from './components/carousel';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>

      <main>
        <Carousel/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
