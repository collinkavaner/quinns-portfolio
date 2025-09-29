import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Work from './components/Work'
import About from './components/About'
import MuseumDiscounts from './components/MuseumDiscounts'
import TextileMuseum from './components/TextileMuseum'
import PosTipping from './components/PosTipping'
import NoMatch from './components/NoMatch'
import TwoWayBay from './components/twoWayBay';

function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/museum-discounts" element={<MuseumDiscounts />} />
          <Route path="/textile-museum-canada" element={<TextileMuseum />} />
          <Route path="/two-way-bay" element={<TwoWayBay />} />
          <Route path="/pos-tipping-screen" element={<PosTipping />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Quinn Kavaner</p>
      </footer>
    </>
  )
}

export default App
