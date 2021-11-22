import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="Nav"> <br></br>
      <Link to='/' className='Nav_link'>Home </Link>
      <Link to='/allreviews' className='Nav_link'>AllReviews</Link>
         
          </nav>
      )
    }
    
    export default Nav