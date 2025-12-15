import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'

export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <nav style={{ marginBottom: 24 }}>
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}