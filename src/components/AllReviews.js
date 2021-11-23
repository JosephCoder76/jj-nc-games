import { getAllReviews } from '../utils/api'
import { useEffect } from "react";

const AllReviews = ({reviews, setReviews}) => {
    
      useEffect(() => {
        getAllReviews().then((allreviews) => {
          setReviews(allreviews)
        })
      })  
        
    return (
        <nav className="Nav">
         <ul>
         {reviews.map((reviews) => {
          return (
            <div key={reviews.title}>
              <p className="ReviewTitle">{reviews.title}</p>
              <img className = "ReviewImages" src={reviews.review_img_url} alt={reviews.title}/>
              <p className="AllReviews">Category: {reviews.category}</p>
              <p className="AllReviews">Author: {reviews.owner}</p>
              <p className="AllReviews">Review Date: {reviews.created_at}</p>
              <p className="AllReviews">Game Designer: {reviews.designer}</p>
              <p className="AllReviews">Current Votes: {reviews.votes}</p>
              <p className="AllReviews">{reviews.review_body}</p><br></br><br></br>
            </div>
          );
        })})
     </ul>
    </nav>
      )
}
    
  
    
    export default AllReviews