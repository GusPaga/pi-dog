import { BrowserRouter as Browser, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home.jsx';
import Detail from './components/Detail';
import Form from './components/Form.jsx';
import About from './components/About';
import AboutEng from './components/AboutEng'
import Prueba from "./components/Prueba.jsx"
import './App.css';

function App() {
  return (
    <Browser>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:id' element={<Detail />} />
          <Route path='/form' element={<Form />} />
          <Route path='/about' element={<About />} />
          <Route path='/abouteNG' element={<AboutEng />} />
          <Route path='/prueba' element={<Prueba />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Browser>
  );
}

export default App;
