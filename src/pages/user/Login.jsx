import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field} from "formik";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../../redux/slices/loginSlice";
import { useSelector } from "react-redux";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function Login() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state)=> state.login.currentUser);
  const isLogin = useSelector((state) => state.login.isLogin);


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://eu-assets.simpleview-europe.com/stokebid/imageresizer/?image=%2Fdmsimgs%2FMCDONALDS_14_128333773.jpg&action=ProductDetailProFullWidth)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            
            <Box>
              <Formik initialValues={{
                name:"",
                password:""
              }} onSubmit={(values)=>{
                axios("http://localhost:3000/users").then((res)=>{
                  let users = res.data;
                  let check = users.find((user)=> user.name == values.name && user.password == values.password)
                  if (check){
                    dispatch(loginSuccess(check));
                    console.log(isLogin);
                    navigate("/")
                  }
                  else{
                    alert("user not found")
                  }
                })
              }}> 
                <Form>
                  <label htmlFor="name">Name</label>
                  <Field name="name"/> <br/>
                  <label htmlFor="password">Password</label>
                  <Field name="password"/>
                  <br/>
                  <Button type="submit">Submit</Button>
                </Form>
              
                
              </Formik>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
