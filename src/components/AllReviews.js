import { getAllReviews } from '../utils/api'
import { useEffect } from "react";
import {Link} from 'react-router-dom'


const AllReviews = ({reviews, setReviews}) => {
    
      useEffect(() => {
        getAllReviews().then((allreviews) => {
          setReviews(allreviews)
        })
      },[])   
        
    return (
        <nav className="Nav">
          <h1 className="button">Select A Review</h1>
         <ul>
         {reviews.map((reviews) => {
          return (
            <div key={reviews.title}>
              <Link to={`/reviews/${reviews.review_id}`}><p className="ReviewTitle">{reviews.title}</p></Link>
              <img className = "ReviewImages" src={reviews.review_img_url} alt={reviews.title}/>
              {/* <p className="AllReviews">Category: {reviews.category}</p>
              <p className="AllReviews">Author: {reviews.owner}</p>
              <p className="AllReviews">Review Date: {reviews.created_at}</p>
              <p className="AllReviews">Game Designer: {reviews.designer}</p>
              <p className="AllReviews">Current Votes: {reviews.votes}</p>
              <p className="AllReviews">{reviews.review_body}</p><br></br><br></br> */}
              </div>
          );
        })})
     </ul>
    </nav>
      )
}
    
  
    
    export default AllReviews