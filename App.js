import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Cartpage from './components/Cart';
function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Navbar/>
    <Routes>
    <Route exact path="/home" element={<Home/>} >
    </Route>
      <Route path="/cart" element={<Cartpage/>} >
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
