import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page2" element={<Menu />} />
        <Route path="/Page3" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
