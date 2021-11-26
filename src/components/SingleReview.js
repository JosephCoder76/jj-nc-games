import { useEffect, useState } from "react";
import { getSingleReview, getReviewComment, patchLikes, postComment, deleteComment } from '../utils/api'
import { useParams } from "react-router-dom";


const SingleReview = () => {

    const { review_id } = useParams();
    const [review, setReviews] = useState([]);
    const [comment, setComment] = useState([]);
    const [votes, setVotes] = useState(0);
    const [delCommId, setdelCommId] = useState();
    const commentObj = {username:"jessjelly"};
    const [newComment, setNewComment] = useState({});
    
    const addComment = (event) =>{
      commentObj.body = newComment;
      event.preventDefault();
      postComment(review_id, commentObj).then(()=>{
      window.location.reload(true); 
      })
    }

    const deleteCommentHandler = (comment_id) =>{
           
      deleteComment(comment_id).then(()=>{
        console.log(comment_id)
        window.location.reload(true); 
      })
    }
    
    

    const increaseVote = () =>{
    
      patchLikes(review_id, {inc_votes:1})
      setVotes((prev) => prev + 1)
    
    }
    const decreaseVote = () =>{
    
    patchLikes(review_id, {inc_votes:1})
    setVotes((prev) => prev - 1)
  
   }

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
            <p className="AllReviews">Current Votes: {review.votes + votes}</p>
            <p className="ReviewBody">{review.review_body}</p>
            <p className="SingleReviewButton">Comments</p>
            {comment.map((comment) => {
              return(
            
             <>
             <p key={comment.title} className="AllComments">{comment.comment_id} {comment.body}</p>
             <button onClick={() => {
               
              setdelCommId(comment.comment_id)
              deleteCommentHandler(delCommId);
             
             }}
              >X</button>
              
              </>
             )
            })}
            
            <h2 className="SingleReviewButton">Vote For Your Review</h2>
            <button className="VoteButton" onClick={increaseVote}>⬆️ </button>
            <button className="VoteButton" onClick={decreaseVote}>⬇️ </button>
            <form onSubmit={addComment}>
            <legend className = "SingleReviewButton"><b>Add A Comment</b></legend>
            <input type='text' name='newComment' onChange={(event) => setNewComment(event.target.value)}/>
            <button type='submit'>Submit Comment</button>
            </form>
            </main>
)
}


export default SingleReview;