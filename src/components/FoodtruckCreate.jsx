import { useState } from "react";
import axios from "axios";

const FoodtruckCreate = () => {
  const [newFoodtruck, setNewFoodtruck] = useState({
    name: "",
    type: "",
    location: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFoodtruck({ ...newFoodtruck, [name]: value });
  };

  const handleCreate = async () => {
    try {
      await axios.post("/api/foodtrucks/add", newFoodtruck);
      setMessage("Foodtruck created successfully.");
    } catch (error) {
      console.error("Error creating foodtruck", error.message);
      setMessage("Error creating foodtruck.");
    }
  };

  return (
    <>
      <h2>Create Foodtruck</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newFoodtruck.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={newFoodtruck.type}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={newFoodtruck.location}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleCreate}>Create Foodtruck</button>
      {message && <p>{message}</p>}
    </>
  );
};

export default FoodtruckCreate;
