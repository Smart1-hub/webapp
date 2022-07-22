import { BrowserRouter as Router, Routes, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '.Navbar/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/*" element={<NoMatch />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
