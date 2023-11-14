import { useState, useEffect } from "react";
import axios from "axios";

const FoodtruckList = () => {
  const [foodtrucks, setFoodtrucks] = useState([]);
  useEffect(() => {
    fetchFoodtrucks();
  }, []);

  const fetchFoodtrucks = async () => {
    try {
      const response = await axios.get("/api/foodtrucks/all", foodtrucks);
      setFoodtrucks(response.data);
    } catch (error) {
      console.error("Error fetching foodtrucks:", error);
    }
  };
  return (
    <div>
      <h2>Foodtrucks List</h2>
      <ul>
        {foodtrucks.map((foodtruck) => (
          <li key={foodtruck.id}>
            {foodtruck.name} - {foodtruck.type} - {foodtruck.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodtruckList;
