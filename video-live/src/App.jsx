import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<video />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
