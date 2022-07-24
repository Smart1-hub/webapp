import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './sheets/Home';
import Detail from './sheets/Detail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/country/:name" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
