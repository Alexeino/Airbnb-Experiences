import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";

const cards = [
  {
    id : 1,
    image : require('./images/image1.png'),
    rating: 5.0,
    sales : 6,
    country: "USA",
    quote : "Life lessons with Katie Zaferes"
  },
    {
    id : 2,
    image : require('./images/image2.png'),
    rating: 5.0,
    sales : 30,
    country: "USA",
    quote : "Learn wedding photography"
  },  
  {
    id : 3,
    image : require('./images/image3.png'),
    rating: 4.8,
    sales : 2,
    country: "IND",
    quote : "Group Mountain Biking"
  },
    {
    id : 4,
    image : require('./images/image4.png'),
    rating: 4.8,
    sales : 2,
    country: "IND",
    quote : "India proud of Neeraj Chopra"
  },
      {
    id : 5,
    image : require('./images/image5.jpg'),
    rating: 5.0,
    sales : 58,
    country: "IND",
    quote : "Pride of Soldier"
  }
]

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Main />
        <div className="carousel">
          {
            cards.map((card)=>{
                return(
                    <Card key={card.id}
                      // image = {card.image}
                      // rating = {card.rating}
                      // sales = {card.sales}
                      // country = {card.country}
                      // quote = {card.quote}
                      // OR
                      {...card}
                    />

                )              
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
