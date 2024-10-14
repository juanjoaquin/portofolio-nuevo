import { useState ,useEffect} from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'

import { HomePage } from './components/HomePage/HomePage'
import { Proyecto1 } from './components/HomePage/ProyectoEstatico/Proyecto1'
import { Proyecto2 } from './components/HomePage/ProyectoEstatico/Proyecto2'
import Proyecto3 from './components/HomePage/ProyectoEstatico/Proyecto3'

 import { Proyecto4 } from './components/HomePage/ProyectoEstatico/Proyecto4'
import { Proyecto5 } from './components/HomePage/ProyectoEstatico/Proyecto5'
import { Proyecto7 } from './components/HomePage/ProyectoEstatico/Proyecto7'
import { Proyecto6 } from './components/HomePage/ProyectoEstatico/Proyecto6'
import { Socials } from './components/HomePage/Socials/Socials'
import { Skills } from './components/HomePage/Skills/Skills'


// import { ProjectID } from './components/HomePage/Projects/ProjectID'
// import { Proyectos } from './components/HomePage/Projects/Proyectos'
// import { Projects } from './components/HomePage/Projects/Projects'
// import { ProyectoID } from './components/HomePage/Projects/ProyectoID'





function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
      if(darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [darkMode])

  return (
    <div className="dark:bg-gray-950 dark:text-white">

      

    <BrowserRouter>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>

      
    <Routes>
      
    <Route path="/" element={<HomePage />} />
    <Route path="/proyectos/1" element={<Proyecto1 />} />
    <Route path="/proyectos/2" element={<Proyecto2 />} />
    <Route path="/proyectos/3" element={<Proyecto3 />} />
    <Route path="/proyectos/4" element={<Proyecto4 />} />
    <Route path="/proyectos/5" element={<Proyecto5 />} />
    <Route path="/proyectos/6" element={<Proyecto6 />} />
    <Route path="/proyectos/7" element={<Proyecto7 />} />
    <Route path="#" element={<Socials darkMode={darkMode}/>}/>
    <Route path="#" element={<Skills darkMode={darkMode}/>}/>
    
    {/* <Route path='/projects' element={<Proyectos />}/>
    <Route path='/projects/:id' element={<ProjectID />}/>
    
    <Route path='/proyectos' element={<Proyectos />}/> */}

    {/* <Route path='/proyectos/:id' element={<ProyectoID />}/> */}

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
