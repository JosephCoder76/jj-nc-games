import { useParams } from "react-router-dom";



const SingleCategory = ({reviews}) => {
  
  const { slug } = useParams();
  console.log("Reviews in Single Reviews",reviews,slug);
  console.log("Reviews", reviews);
  console.log(reviews.filter(review => review.slug === slug)) //Trying to decipher why the filter was not working so trying to log out and 
  //Need to go through this.


  return (
    <main className="ItemsByCat">
      <h1>Items by category</h1>
      <ul>
         {/* { reviews.filter(review => review.slug === slug) */}
         //.map(review => {
            // return (
            //   <div key={review.title}>
            //     <p>{review.title}</p> 
                
            //   </div>
            // )
          }
        </ul>
    </main>
  )
    
};

export default SingleCategory;
