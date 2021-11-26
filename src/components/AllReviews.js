import { getAllReviews, getReviewQuery } from '../utils/api'
import { useEffect } from "react";
import {Link} from 'react-router-dom'


const AllReviews = ({reviews, setReviews}) => {
    
  const reviewQuery = (event) =>{
     
    getReviewQuery(event.target.value).then(()=>{
    //window.location.reload(true); 
 })
}

      useEffect(() => {
        getAllReviews().then((allreviews) => {
          setReviews(allreviews)
        })
      },[])   
        
    return (
        <main className="AllReviewsBackgroundImage">
        <nav className="Nav">
        <form>
            <h3 className="SelectAReviewButton" >Sort Reviews</h3>
            <label>sortBy:</label>
            <select onChange={reviewQuery}>
            <option value='created_at'>CreatedAt</option>
            <option value='comment_count'>Comment_count</option>
            <option value='votes'>Votes</option>
            </select>
            </form>
         <h1 className="SelectAReviewButton">Select A Review</h1>
         <ul>
        
         {reviews.map((reviews) => {
          return (
            
            <div key={reviews.title}>
              <Link to={`/reviews/${reviews.review_id}`}><p className="SingleReviewButton">{reviews.title}</p></Link><br></br>
              <img className = "ReviewImages" src={reviews.review_img_url} alt={reviews.title}/>
              </div>
          );
        })}
     </ul>
    </nav>
   
    </main>
      )
}
    
  
    
    export default AllReviews