import './App.css';
import Home from "./compoents/Home";
import Nav from "./compoents/Nav";
import AllReviews from "./compoents/AllReviews"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <h1 className="App">JJ Game Reviews
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AllReviews" element={<AllReviews />} />
    </Routes>
    </h1><br></br>
    <br></br>
    </BrowserRouter>
  );
}

export default App;
