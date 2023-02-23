import logo from './logo.svg';
import './components/stylesheet.css'
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Maincontent/>
      <Footer/>
    </>
  );
}

export default App;
