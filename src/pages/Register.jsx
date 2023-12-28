import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import userServices from "../services/userService";
import { redirect } from "react-router-dom";

const { addUser } = userServices;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Register = () => {
  const [user, setUser] = useState({});

  const onChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handleAdd(e) {
    e.prevenDefault();
    console.log("test");
  }
  return (
    <Box sx={style}>
      <Box
        component="form"
        // sx={{
        //   "& > :not(style)": { m: 1, width: "50ch" },
        // }}
        noValidate
        autoComplete="off"
        onChange={onChange}
        method="post"
        onSubmit={()=>handleAdd(e)}
      >
        <Typography variant="h6" component="h2">
          Register
        </Typography>

        <TextField
          name="name"
          id="name"
          label="name *"
          variant="outlined"
          color="warning"
        />
        <TextField
          name="email"
          id="email"
          label="email *"
          variant="outlined"
          color="warning"
        />
        <TextField
          name="password"
          id="password"
          label="password *"
          variant="outlined"
          color="warning"
        />

        <Box>
          <Button type="submit" variant="contained" color="success">
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
