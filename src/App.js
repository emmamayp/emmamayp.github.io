import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />}/>
            <Route path='/experience' element={<Experience />}/>
          </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
