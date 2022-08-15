import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepages from './pages/Homepages/Homepages';
import { Header } from './Header/Header';
import AuthorsPages from './pages/authors/AuthorsPages';
import { Books } from './pages/Books/Books';
import { AboutPage } from './pages/aboutPage/aboutPage';





function App() {
  return(
   
    <div>
   
     <Header/>
     <Routes>
        <Route path="/" element={<Homepages/>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/books" element={<Books/>} />
        <Route path='/authors' element={<AuthorsPages/>} />
      <Route path='/aboutPage/:id' element={<AboutPage/>}/>
    
      </Routes>

    {/* <AutorsComponent/> */}

    
    </div>
  )



}

export default App