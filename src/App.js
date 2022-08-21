import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route path='/portfolio' element={<Portfolio/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
          </Routes>    
      </div>
    </Router>
  );
}

export default App;
