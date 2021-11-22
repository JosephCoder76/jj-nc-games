import { getAllReviews } from '../utils/api'

import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    
      
        
    useEffect(() => {
        getAllReviews().then((allreviews) => {
          setReviews(allreviews)
        })
      }, [])  
        
    return (
        <nav className="Nav">
         <h2>Please Select A Review Category</h2>
         <ul>
         {reviews.map((reviews) => {
          return (
            <div key={reviews.title}>
              <p>{reviews.title}</p>
              <p>{reviews.category}</p>
             
            </div>
          );
        })}            )
      </ul>

          </nav>
      )
}
    
  
    
    export default AllReviews