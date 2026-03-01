import './styles.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import StartPage from './components/StartPage';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import Resources from './components/Resources';
import About from './components/About';
import Opportunities from './components/Opportunities';

function App() {

  return (
    <>
      <img className='image-1' src='https://rchivate.github.io/dinner/images/back.png' alt="background" />

      <div className='main'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<StartPage />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/opportunities" element={<Opportunities />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />

    </>

  );
}

export default App;
