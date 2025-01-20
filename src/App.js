import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import AboutUs from './Components/AboutUs';
import Feedback from './Components/Feedback';
import Quotes from './Components/Quotes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  function PageNotFound() {
    return <h2>Error: 404 Page Not Found</h2>;
  }
  return (
    <>
      <Router>
      <Navbar title="Utility" aboutText="About Us" />
      <div className="container my-3">
        <Routes>
        <Route exact path="/" element={<TextForm/>} />
        <Route exact path="/AboutUs" element={<AboutUs/>} />
        <Route exact path="/Feedback" element={<Feedback/>} />
        <Route exact path="/Quotes" element={<Quotes/>} />
        <Route  path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
