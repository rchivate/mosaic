import './styles.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import StartPage from './components/StartPage';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import Resources from './components/Resources';
import About from './components/About';

function App() {

  return (
    <>

      <div className='main'>
        <img className='image-1' src='https://healthyresta.github.io/dinner/images/back.png' alt="background" />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<StartPage />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>

    </>

  );
}

export default App;
