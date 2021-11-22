import './App.css';
import Home from "./compoents/Home";
import Nav from "./compoents/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">JJ Game Reviews
    <Nav />
    <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
