import './App.css';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import RelojEffect from './components/RelojEffect';
import Contador from './components/Contador';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FutContextProvider from './components/FutContextProvider';
import {FutList} from "./components/FutList"
import Header from './components/Header';
import ThemeProvider from './components/ThemeProvider';

function App() {

    
  return (
  <>
    <h1 className='title'>PRACTICA EN REACT</h1>
        <Router>
          <ThemeProvider>
          <Header/>
          <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/UseState' element={<Contador></Contador>}/>
            <Route path='/UseEffect' element={<RelojEffect></RelojEffect>}/>
            <Route path='/UseContext' element={<FutContextProvider><FutList/></FutContextProvider>}/>
        </Routes>
       
        </ThemeProvider>
        </Router>
        </>
  );
}

export default App;
