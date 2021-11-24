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
        <main className="AllReviewsBackgroundImage">
        <nav className="Nav">
          <h1 className="SelectAReviewButton">Select A Review</h1><br></br>
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