import Navbar from './components/Navar.jsx'
import Footer from './components/Footer.jsx'

import Welcome from './pages/Welcome.jsx'
import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'
import './App.css'
import './index.css'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screentext-white flex flex-col">
      <Navbar />

      {/* 🔽 DOM กลางที่เปลี่ยนเนื้อหา */}
      <main className="flex-1 pt-16 pb-40">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
