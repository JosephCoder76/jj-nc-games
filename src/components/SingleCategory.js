import { useParams } from "react-router-dom";



const SingleCategory = ({reviews}) => {
  
  const { category } = useParams();

  return (
    <main className="SingleCategory"><br></br>
      <h1 className="ItemsByCategory">{category} Reviews</h1>
      <ul>
         {reviews.filter(review => review.category === category).map(review => {
            return (
              <div key={review.title}>
                <p>{review.title}</p> 
              <p className="ReviewTitle">{reviews.title}</p>
              <img className = "ReviewImages" src={review.review_img_url} alt={reviews.title}/>
              <p className="AllReviews">Category: {review.category}</p>
              <p className="AllReviews">Author: {review.owner}</p>
              <p className="AllReviews">Review Date: {review.created_at}</p>
              <p className="AllReviews">Game Designer: {review.designer}</p>
              <p className="AllReviews">Current Votes: {review.votes}</p>
              <p className="AllReviews">{review.review_body}</p><br></br><br></br>
                
              </div>
            )
          })}
        </ul>
    </main>
  )
    
};

export default SingleCategory;
