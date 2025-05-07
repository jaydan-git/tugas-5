import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'  
import './App.css'

function App() {

  return (
   
    <BrowserRouter>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/user/1/ucok/ucok@gmail.com">User 123</Link> |{' '}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id/:name/:email" element={<User />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;