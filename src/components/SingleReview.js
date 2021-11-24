import { useEffect, useState } from "react";
import { getSingleReview, getReviewComment } from '../utils/api'
import { useParams } from "react-router-dom";

const SingleReview = () => {

    const { review_id } = useParams();

    const [review, setReviews] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        getSingleReview(Number(review_id)).then((review) => {
          setReviews(review)
        })
        getReviewComment(Number(review_id)).then((comment) => {
          setComment(comment)
        })
      },[])   
      

   return (
    <main className="SingleReview"><br></br>
            <p className="SingleReviewButton">{review.title}</p><br></br>
            <img className = "SingleReviewImage" src={review.review_img_url} alt={review.title}/>
            <p className="AllReviews">Category: {review.category}</p>
            <p className="AllReviews">Author: {review.owner}</p>
            <p className="AllReviews">Review Date: {review.created_at}</p>
            <p className="AllReviews">Game Designer: {review.designer}</p>
            <p className="AllReviews">Current Votes: {review.votes}</p>
            <p className="ReviewBody">{review.review_body}</p>
            <p>Comments</p>
            {comment.map((comment) => {
              return(
             <p className="AllReviews">{comment.body}</p>
              )
            })}
    </main>
)
}


export default SingleReview;