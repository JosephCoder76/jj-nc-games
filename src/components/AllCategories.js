
import { getAllCategories } from '../utils/api'
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const AllCategories = () => {
    const [categories, setCategories] = useState([])
            
    useEffect(() => {
        getAllCategories().then((allCategories) => {
          setCategories(allCategories)
          
        })
      }, [])  
              
          return (
        <nav className="Categories">
          
         <h2>Please Select A Review Category</h2>
         <ul>
        {categories.map(category => {
          return (
            <span key={category.slug}>
              <Link to={`/categories/${category.slug}`}>
                <h4 class="button">{category.slug}</h4>
              </Link>
              
            </span>
            )})}
      </ul>
       </nav>
      )
    }
    
    export default AllCategories