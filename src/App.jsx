
import { Routes , Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import StorePage from './Pages/StorePage/StorePage'
import About from './Pages/About/About'
import NavBar from './Components/NavBar/NavBar'
import ContextPovider from './Context/Context'

function App() {

  return (
    <ContextPovider>
    <NavBar/>
    <div className='container'>
        <Routes>
          <Route  path='/'  element={<Home/>}/>
          <Route  path='/store'  element={<StorePage/>}/>
          <Route  path='/about'  element={<About/>}/>
        </Routes>
    </div>
    
    </ContextPovider>
  )
}

export default App
