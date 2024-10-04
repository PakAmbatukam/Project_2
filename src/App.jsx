import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/stylebaru.scss';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Beranda from './Pages/Beranda/Beranda'
import Profil from './Pages/Profil'
import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUs'
import Detail from './Pages/Beranda/Detail'
import Error404 from './Pages/Error404'
import Products from './Pages/Products/Products';
import ProductsDetail from './Pages/Products/ProductsDetail';
import Negara from './Pages/Negara/Negara';
import Negaradetail from './Pages/Negara/Negaradetail';
import ThemeContext from './context/Themecontext';

function App() {

  const theme = useState("Light");
  

  return (
  
     

<div>
  
  <BrowserRouter>
  <ThemeContext.Provider value={theme}>
  <Navbar/>
<Routes>
  <Route path='/Beranda' element={<Beranda/>} />
  <Route path='/profil' element={<Profil/>} />
  <Route path='/AboutUs' element={<AboutUs/>} />
  <Route path='/detail/:id' element={<Detail/>} />
  <Route path='*' element={<Error404/>} />
  <Route path='/Products' element={<Products/>} />
  <Route path='/ProductsDetail/:id' element={<ProductsDetail/>} />
  <Route path='/Negara' element={<Negara/>} />
  <Route path='/Negaradetail/:id' element={<Negaradetail/>} />
</Routes>
</ThemeContext.Provider>
</BrowserRouter>
  
</div>

      
  
      
    
    

  )
}

export default App
