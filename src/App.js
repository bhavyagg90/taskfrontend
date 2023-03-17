import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element = {<HomePage/>} />
          <Route  path='/home' element = {<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
