import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
