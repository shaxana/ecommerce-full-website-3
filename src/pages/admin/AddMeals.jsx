import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeal} from "./../../redux/slices/mealsSlice";
import "./../../style/sass/addmeals.scss";
import axios from "axios";

const AddMeals = () => {
  const dispatch = useDispatch();
  const newMeals = useSelector((state) => state.meals.newMeals);
  const handleInputChange = (e) => {
    dispatch();
  };

  const handleAddMeal = () => {
    axios.post("http://localhost:3000/meals", { name: mealName })
      .then((response) => {
        dispatch(addMeal(response.data));

        setNewMeal("");
      })
      .catch((error) => {
        console.error("Error adding meal:", error);
      });
  };

  return (
    <div className="add-meals-container">
      <h2>Admin Page - Add New Meal</h2>
      <div className="form-group">
        <label>Meal Name:</label>
        <input
          type="text"
          value={mealName}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddMeal}>Add Meal</button>
    </div>
  );
};

export default AddMeals;
