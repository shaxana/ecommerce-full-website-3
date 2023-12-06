
import React, { useState } from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const currentUser = useSelector((state) => state.login.currentUser);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Profile Page</h2>
      {currentUser ? (
        <div>
          <div>
            <strong>Name:</strong> {currentUser.name}
          </div>
          <div>
            <strong>Password:</strong> 
            {showPassword ? currentUser.password : "****"}
            <button onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div><div>
            <strong>Balance:</strong> {currentUser.balance}
          </div>
          <div>
            <strong>Wishlist:</strong> {currentUser.wishlist}
          </div> <div>
            <strong>Cart:</strong> {currentUser.cart}
          </div>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
