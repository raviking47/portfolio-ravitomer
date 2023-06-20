import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Skill from './Components/Skill';
import Work from './Components/Work';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar/> 
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/skill' element={<Skill/>}/>
     <Route path='/work' element={<Work/>}/>
     <Route path='/contact' element={<Contact/>}/>
     </Routes>
     
    <Footer/>
     </BrowserRouter>    
    </div>
  );
}

export default App;
