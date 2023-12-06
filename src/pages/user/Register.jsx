import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerSuccess } from "../../redux/slices/registerSlice";
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
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  // .test("Name must contain only letters"),
  password: Yup.string().required("Required"),
  balance: Yup.string()
    // .test("balance must contain number", digitsOnly)
    .required("Required"),
});
function Register() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.register.isRegistered);

  return (
    <div
      style={{
        background:
          "url(https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          height:"83vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
        backgroundPosition: "center",
      }}
    >
      <ThemeProvider  theme={defaultTheme}>
        <Container style={{margin:"0 auto"}} component="main" maxWidth="xs">
          <CssBaseline />
          <Box 
            sx={{
              
              background:"transparent !important",
              marginTop: -6,
              display: "flex",
              justifyContent:"center",
              position:"relative",
              top:"150px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                marginTop: "0px",
                padding: "40px",
                width: "100%",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography style={{color:"black",margin:"10px",marginLeft:"2px"}} component="h1" variant="h5">
                Sign up
              </Typography>

              <Box>
                <Formik
                  initialValues={{
                    id:"",
                    name: "",
                    password: "",
                    balance: "",
                    agreement: false,
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    values.isAdmin = false;
                    values.basket = [];
                    values.wishlist = [];

                    if (values.agreement) {
                      console.log(values);
                      axios
                        .post("http://localhost:3000/users/", values)
                        .then((res) => {
                          dispatch(registerSuccess());
                          navigate("/login");
                        });
                    } else {
                      alert("Please, check the box");
                    }
                  }}
                >
                  <Form>
                    <label htmlFor="name">Name</label>
                    <Field style={{marginLeft:"42px",padding:"5px",borderRadius:"2px",}} name="name" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <Field style={{marginLeft:"15px",padding:"5px",borderRadius:"2px",marginTop:"10px",marginRight:"10px"}} name="password" />
                    <br />
                    <label  htmlFor="balance">Balance</label>
                    <Field style={{marginLeft:"28px",padding:"5px",borderRadius:"2px",marginTop:"10px"}}  name="balance" />
                    <br />
                    <label style={{position:"relative",top:"15px"}} htmlFor="agreement">I agree all the terms </label> 
                    <Field style={{position:"relative",top:"15px"}} name="agreement" type="checkbox" /> 
                    <button style={{background:"white", 
                   width:"150px", height:"25px", marginTop:"25px" ,borderRadius:"8px", marginLeft:"5px",width:"100%", fontSize:"15px" ,height:"45px", cursor:"pointer"}} type="submit">Submit</button>
                    <br />
                  </Form>
                </Formik>
              </Box>
            </Paper>
          </Box>
          {/* <Copyright sx={{ mt: -3, ml: 17 }} /> */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Register;