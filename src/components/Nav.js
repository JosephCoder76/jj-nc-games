import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="Nav"> <br></br>
      <Link to='/' className='Nav_link'>Home </Link>
      <Link to='/allreviews' className='Nav_link'>AllReviews</Link>
      <Link to='/allcategories' className='Nav_link'>AllCategories</Link>
      </nav>
      )
    }
    export default Nav