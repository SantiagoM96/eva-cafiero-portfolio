import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bio, Home, AlwaysUp, Contacto, Resume, Navbar, ProjectsListContainer, ScrollToTopButton } from './imports/index';


import Project from './pages/Projects/components/Project/Project';
function App() {
  return (
    <>
      <BrowserRouter>
        <AlwaysUp />
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/proyectos" element={<ProjectsListContainer />} />
            <Route path="/proyectos/:id" element={<Project />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </>
  )
}

export default App
