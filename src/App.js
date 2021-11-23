import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import AllCategories from "./components/AllCategories"
import AllReviews from "./components/AllReviews"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <h1 className="App">JJ Game Reviews
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AllReviews" element={<AllReviews />} />
    <Route path="/AllCategories" element={<AllCategories />} />
    
    </Routes>
    </h1><br></br>
    <br></br>
    </BrowserRouter>
  );
}

export default App;
