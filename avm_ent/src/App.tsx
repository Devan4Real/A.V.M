import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StickyNavbar from './components/StickyNavbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div
        className="min-h-screen w-full relative z-0"
        style={{
          color: 'white',
          paddingTop: '3rem'
        }}
      >
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;