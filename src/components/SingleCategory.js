import { useParams } from "react-router-dom";

const SingleCategory = ({reviews}) => {
  const { category } = useParams();

  return (
    <main><br></br>
      <h1 className="ItemsByCategory">{category} Reviews</h1>
      <ul>
         {reviews.filter(review => review.category === category).map(review => {
            return (
              <div key={review.title}>
                <p className="SingleReviewButton">{review.title}</p> 
              <p className="ReviewTitle">{reviews.title}</p>
              <img className = "SingCatReviewImage" src={review.review_img_url} alt={reviews.title}/>
              <p className="SingCatReview">Category: {review.category}</p>
              <p className="SingCatReview">Author: {review.owner}</p>
              <p className="SingCatReview">Review Date: {review.created_at}</p>
              <p className="SingCatReview">Game Designer: {review.designer}</p>
              <p className="SingCatReview">Current Votes: {review.votes}</p>
              <p className="SingCatReview">{review.review_body}</p><br></br><br></br>
                
              </div>
            )
          })}
        </ul>
    </main>
  )
    
};

export default SingleCategory;
