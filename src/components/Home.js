import HomeGif from '../images/HomePage.gif'
import MadeWithReact from '../images/madewithreact.png'

const Home = () => {
  return (
    <div className="Home">
      <br></br>
      <br></br>
      <img src={HomeGif} alt='Store'></img><br></br>
      <img className="madeWithReact"src={MadeWithReact} alt='Store'></img>
      <div class="footer">
      <p>JJ Game Reviews Powered By REACT JS</p>
      </div>
      </div>
    
  )
}

export default Home