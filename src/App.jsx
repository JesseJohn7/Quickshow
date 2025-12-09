import React from 'react'
import Home from './pages/Home'
import Movies  from './pages/Movies'  
import MovieDetail from './pages/MovieDetail'
import SeatLayout from './pages/SeatLayout'
import Mybookings from './pages/my-bookings'
import Favourite from './pages/Favourite'
import { Route,Routes,useLocation } from 'react-router-dom'
import Toaster from 'react-hot-toast'
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route  path = '/' element = {<Home/>}/>
        <Route  path = '/movies' element = {<Movies/>}/>
        <Route  path = '/movies/:id' element = {<MovieDetail/>}/>
        <Route  path = '/movies/:id/:date' element = {<SeatLayout/>}/>
        <Route  path = '/mybookings' element = {<Mybookings/>}/>
        <Route  path = '/favourite' element = {<Favourite/>}/>
      </Routes>
       {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App