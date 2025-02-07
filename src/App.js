import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from './components/StartPage';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import Resources from './components/Resources';

function App() {


  return (
    <>
      <div className='main'>
        <img className='image-1' src='https://healthyresta.github.io/dinner/images/back.png' alt="background" />

        <Router>
          <img className='logo' src='https://healthyresta.github.io/dinner/images/webmaster-main-logo.png' alt="Placeholder 1" />

          <Header />
          A
          <Routes>
            <Route path="/dinner" element={<StartPage />}></Route>
            <Route path="/dinner/#menu" element={<Menu />}></Route>
            <Route path="/dinner/resources" element={<Resources />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />

    </>

  );
}

export default App;
