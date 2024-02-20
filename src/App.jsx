import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Filter from './pages/filter/Filter'
import CheaperCards from './components/cheaperCards/CheaperCards'
import InfoCard from './pages/infoCard/InfoCard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/filter/' element={<Filter/>}/>
          <Route path='/filter/:id' element={<InfoCard/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
