import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const Profile = () => {
  const currentUser = useSelector((state) => state.login.currentUser);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

   <Container>
     <div>
      <h2>Profile Page</h2>
      <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="" />

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
          <strong>Wishlist:</strong> {currentUser.wishlist.map((item) => item.name).join(", ")}
          </div> <div>
          <strong>Cart:</strong>
{currentUser.basket.map((item) => (
  <div key={item.id}>
    {item.name} - {item.price}
  </div>
))}          </div>
        </div>
      ) : (
        <p style={{marginLeft:150}}>Please log in to view your profile.</p>
      )}

    </div>
   </Container>
  );
};

export default Profile;
