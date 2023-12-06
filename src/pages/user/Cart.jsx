import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Card, CardMedia, CardContent, Typography, CardActions, } from "@mui/material";
// import { left } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, increaseCount, removeFromCart, decreaseCount} from "../../redux/slices/loginSlice";
import { DisabledContextProvider } from "antd/es/config-provider/DisabledContext";

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    // emptyCart,
  } = useCart();

  const dispatch = useDispatch()
  const cartItems = useSelector((state)=>{
     return state.login.cart;
    })

  return (

    <Container className="py-4 mt-5">
      <h1
        
      >
        {isEmpty ? "Your Cart is Empty" : "The Cart"}
      </h1>
      <Row className="justify-content-center">
      <Grid container spacing={2}>
        {cartItems.map((cartItem)=>{
return <Grid item xs={4} key={cartItem.id}>
<Card sx={{ maxWidth: 345 }} style={{marginLeft:50}} >
    <CardMedia
      sx={{ height: 140 }}
      image={cartItem.image}
      title="green iguana"
      style={{width:200, margin:"0 auto"}}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {cartItem.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{marginLeft:110}}>
      {cartItem.description} 
      </Typography>
      <div className="count" style={{display:"flex"}}>
      <Button style={{width:40, height:40, cursor:"pointer"}} onClick={()=>{
        dispatch(increaseCount({id: cartItem.id}))
      }}>+</Button>
      <Typography variant="body2" color="text.secondary" style={{marginLeft:110}}>
     Count: {cartItem.count}
      </Typography>
      <Button style={{width:40, height:40, cursor:"pointer"}} onClick={()=>{
        dispatch(decreaseCount({id: cartItem.id}))
      }}>-</Button>
      </div>

    </CardContent>   
    
      <Button style={{backgroundColor:'gold', padding:10, width:100, border:"none", borderRadius:8 , marginLeft:200, cursor:"pointer"}} size="small"
      onClick={()=>{
        console.log('Delete button clicked')
        dispatch(removeFromCart(cartItem))
      }}> Delete</Button>
       
  </Card>
</Grid>
        })}
      
  
</Grid>
     
        {/* {!isEmpty && ( */}
          <Row
            style={{ position: "fixed", bottom: 0 }}
           
          >
            <div style={{display:"flex"}}>
           <div>
              <h1>Total Price: Rs. {cartTotal}</h1>
            </div>
            <div  >
              <button style={{backgroundColor:'gold', padding:10, width:150, border:"none", borderRadius:8 , marginLeft:200 }}
                variant="danger"
                className="m-2"
                onClick={()=>{
                  dispatch(clearCart())
                }}
              >
                <BsCartX size="1.7rem" />
                Clear Cart
              </button>
             
            </div></div>
          </Row>
        {/* )} */}
      </Row>
    </Container>
  );
};

export default Cart;