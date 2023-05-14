import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div>
      <h2>Total coffees are: {coffees.length}</h2>
      {/* {coffees.map((coffee) => (
        <div>
          <p>{coffee.name}</p>
          <p>{coffee.taste}</p>
          <p>{coffee.category}</p>
        </div>
      ))} */}
      <div className="grid md:grid-cols-2 my-4 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
