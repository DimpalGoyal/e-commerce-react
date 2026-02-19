// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/Checkout.jsx'
import Navbar from './components/navbar.jsx'

/**
 * Root application component that renders the navigation bar and top-level routes.
 *
 * Renders the Navbar and a Routes tree mapping "/" to Home, "/auth" to Auth, and "/checkout" to Checkout.
 * @returns {JSX.Element} The root JSX element for the application.
 */
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>

    </>
  )
}

export default App