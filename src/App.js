import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Longitudnal from './components/Longitudnal';
import Transverse from './components/Transverse';
import Loads from './components/Loads';
import Nav from './components/Nav';
import Import from './components/Import';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Longitudnal/>}/>
        <Route path='/transverse' element={<Transverse/>}/>
        <Route path='/loads' element={<Loads/>}/>
      </Routes>
      <Import/>
    </div>
  );
}

export default App;
