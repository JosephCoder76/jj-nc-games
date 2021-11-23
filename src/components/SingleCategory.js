import { useParams } from "react-router-dom";



const SingleCategory = ({reviews}) => {
  
  const { category } = useParams();
  console.log("Reviews in Single Reviews",reviews);
  const mystery = reviews.filter(review => review.category === category)
  console.log("Filter",mystery) //Trying to decipher why the filter was not working so trying to log out and 
  //Need to go through this.


  return (
    <main className="ItemsByCat">
      <h1>Items by category</h1>
      <ul>
         {reviews.filter(review => review.category === category).map(review => {
            return (
              <div key={review.title}>
                <p>{review.title}</p> 
                
              </div>
            )
          })}
        </ul>
    </main>
  )
    
};

export default SingleCategory;
