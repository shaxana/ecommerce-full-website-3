import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "./../../style/sass/meals.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import {
  addToFavorite,
  removeFavorite,
  addToCart,
  removeFromCart,
  clearCart,
} from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import "./../../style/sass/meals.scss";
function Meals() {
  let [meals, setMeal] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/meals").then((res) => {
      setMeal(res.data);
    });
  }, []);

  let [fav, setFav] = useState([]);
  const dispatch = useDispatch();
  const favItems = useSelector((state) => {
    return state.login.wishlist;
  });
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div className="sidenavs">
              <div className="sevimliler">
                <img
                  className="sevimlimg"
                  src="https://mcdonalds.az/images/static/full_menu.jpg"
                  alt=""
                  style={{ width: "100px" }}
                />
                <h4>Müştəri sevimliləri</h4>
              </div>
              <div className="meals">
                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/5d61dc895b83f47eafc0f6cbfb353bad.png"
                    alt=""
                  />
                  <h4>Burgerlər</h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg"
                    alt=""
                  />
                  <h4>İçkilər</h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/867cff5309d79402a604b6b8b6f6fcce.jpg"
                    alt=""
                  />
                  <h4>Happy Meal</h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/d53a391310a492a79740d611bbfd53b9.jpg"
                    alt=""
                  />
                  <h4>Qəlyanaltılar</h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/5226794fdd6873f66f37ae0397286b8c.png"
                    alt=""
                  />
                  <h4>Salatlar</h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/5465ab8529156a71e76c3d569863862b.png"
                    alt=""
                  />
                  <h4>Souslar</h4>
                </div>

                <div className="sortdiv" style={{ display: "flex" }}>
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/fed86781205af0e755e7553dbf0da55b.jpg"
                    alt=""
                  />
                  <h4>Şirniyyat və kokteyllər</h4>
                </div>

                <div className="sortdiv" style={{ display: "flex" }}>
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/decdafe4e7aa96fbb17420635b19eec3.jpg"
                    alt=""
                  />
                  <h4>İsti içkilər</h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/879d7da33c37647f84a6a22e87c658b3.png"
                    alt=""
                  />
                  <h4>Mc Cafe®</h4>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="cards">
              <h1 className="cardsmealheading">Burgerlər</h1>
              <Grid container spacing={2}>
                {meals &&
                  meals.map((meal) => {
                    return (
                      <Grid
                        item
                        xs={4}
                        key={meal.id}
                        style={{ position: "relative" }}
                      >
                        <div
                          className="card"
                          style={{ borderStyle: "none", textAlign: "center" }}
                        >
                          <Link to={`/meals/${meal.id}`}>
                            <img
                              src={meal.image}
                              
                              width={300}
                              className="meal-image"
                            />
                            <p className="mealname">{meal.name}</p>
                          </Link>
                          <Button
                            className="cartButton"
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(addToCart(meal));
                            }}
                          >
                            Add to Cart
                          </Button>
                          <FontAwesomeIcon
                            icon={
                              favItems.find((favItem) => favItem.id === meal.id)
                                ? solidHeart
                                : regularHeart
                            }
                            style={{
                              position: "absolute",
                              top: 10,
                              right: 10,
                              color: "red",
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const isFavorite = favItems.find(
                                (favItem) => favItem.id === meal.id
                              );
                              if (isFavorite) {
                                dispatch(removeFavorite(meal.id));
                              } else {
                                dispatch(addToFavorite(meal));
                              }
                            }}
                          />
                        </div>
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Meals;