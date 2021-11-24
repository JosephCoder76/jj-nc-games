import { useEffect, useState } from "react";
import { getSingleReview } from '../utils/api'
import { useParams } from "react-router-dom";

const SingleReview = () => {

    const { review_id } = useParams();
    
    console.log("Review_Ids", review_id)
    console.log(typeof(review_id)) //Change string to int

    const [review, setReviews] = useState([]);
    useEffect(() => {
        getSingleReview(Number(review_id)).then((review) => {
          setReviews(review)
        })
      },[])   
      console.log("Data",review )
      
   return (
<main className="SingleReview"><br></br>
            {/* <h1 className="ItemsByCategory">Single Review</h1> */}
            <p className="ReviewTitle">{review.title}</p>
            <img className = "ReviewImages" src={review.review_img_url} alt={review.title}/>
            <p className="AllReviews">Category: {review.category}</p>
            <p className="AllReviews">Author: {review.owner}</p>
            <p className="AllReviews">Review Date: {review.created_at}</p>
            <p className="AllReviews">Game Designer: {review.designer}</p>
            <p className="AllReviews">Current Votes: {review.votes}</p>
            <p className="AllReviews">{review.review_body}</p><br></br><br></br>
</main>
)
}


export default SingleReview;