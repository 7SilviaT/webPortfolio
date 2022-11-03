import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './assets/components/Navigation/Navbar';
import Home from './assets/components/Pages/Home';
import AboutMe from './assets/components/Pages/AboutMe';
import Projects from './assets/components/Pages/Projects';
import Resume from './assets/components/Pages/Resume'

function App() {
  
  return (
    <div className='App'>    
    <Router>      
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/AboutMe' element={<AboutMe/>}/>
        <Route path = '/Projects' element={<Projects/>}/> 
        <Route path = '/Resume' element={<Resume />}/>     
      </Routes>
    </Router>
    </div>
  )

}

export default App
