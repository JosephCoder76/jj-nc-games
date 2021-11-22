import { getAllReviews, getAllCategories } from '../utils/api'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllCategories().then((allCategories) => {
          setCategories(allCategories)
        })
      }, [])  
    
      
    return (
        <nav className="Nav">
         <h1>AllReviews</h1>
         <ul>
        {categories.map(category => {
          return (
            <span key={category.slug}>
              <Link to={`/Categories/category`}>
                <h4>{category.slug}</h4>
              </Link>
            </span>
            )})}
      </ul>

          </nav>
      )
    }
    
    export default AllReviews