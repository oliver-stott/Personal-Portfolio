import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./assets/Home";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Router>
        <Navbar />
        
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={
              <Home />
            } />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div >
  );
}

export default App;
