import { useEffect, useState } from "react";
import { getSingleReview } from '../utils/api'
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

const SingleReview = () => {

    const { review_id } = useParams();
    
    console.log("Review_Ids", review_id)
    console.log(typeof(review_id)) //Change string to int

    const [review, setReviews] = state([]);
    useEffect(() => {
        getSingleReview(review_id).then((review) => {
          setReviews(review)
        })
      },[])   

      
   return (
   <p>Here</p>
    )
    //     <nav className="SingleReview">
          
    //      <h2>Please Select A Review</h2>
    //      <ul>
    //     {categories.map(category => {
    //       return (
    //         <span key={category.slug}>
    //           <Link to={`/categories/${category.slug}`}>
    //             <h4 class="button">{category.slug}</h4>
    //           </Link>
              
    //         </span>
    //         )})}
    //   </ul>
    //    </nav>
    //   )




}


export default SingleReview;