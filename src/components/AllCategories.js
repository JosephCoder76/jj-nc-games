
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
        <nav className="Nav">
          
         <h2>Please Select A Review Category</h2>
         <ul>
        {categories.map(category => {
          return (
            <span key={category.slug}>
              <Link to={`/categories/${category.slug}`}>
                <h4>{category.slug}</h4>
              </Link>
              {/* <Link to={`/Categories/category`}>
                <h4 className="Category">{category.slug}</h4>
              </Link> */}
            </span>
            )})}
      </ul>
       </nav>
      )
    }
    
    export default AllCategories