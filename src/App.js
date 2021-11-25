import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import AllCategories from "./components/AllCategories"
import AllReviews from "./components/AllReviews"
import { useState, useEffect } from "react";
import SingleCategory from './components/SingleCategory';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllReviews } from './utils/api';
import SingleReview from "./components/SingleReview"



function App() {
  const [reviews, setReviews] = useState([])
  const [categories, setCategories] = useState([])
  
    

  useEffect(() => {
    getAllReviews().then((allreviews) => {
      setReviews(allreviews)
    })
  }, [])  

  
  return (
    <BrowserRouter>
    <h1 className="PageTitle">JJ Game Reviews</h1>
    <section className="App">
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AllReviews/" element={<AllReviews reviews={reviews} setReviews={setReviews} />} />
    <Route path="/reviews/:review_id" element={<SingleReview />} />
    <Route path="/AllCategories" element={<AllCategories />} />
    <Route path="/categories/:category" element={<SingleCategory reviews={reviews} categories={categories}/>} />
    <Route path="/ReviewsByCategory" element={<AllCategories reviews={reviews} setReviews={setReviews} categories={categories} setCategories={setCategories}/>} />
   
    {/* <Route path="/reviews/:comment/comments" element={<Comments comments={comments} reviews={reviews}/>} /> */}
    </Routes>
    </section>
    <br></br>
    <br></br>
    </BrowserRouter>
  );
}

export default App;
