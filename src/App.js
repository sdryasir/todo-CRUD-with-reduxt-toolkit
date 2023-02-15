import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import Navbar from './components/Navbar';
function App() {

  return (
    <Router>
      <div style={{maxWidth:'400px'}} className='mx-auto'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
        
    </div>
    </Router>
    
  );
}

export default App;
