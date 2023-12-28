import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { Input } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFood } from "../store/features/foodSlice";

const theme = createTheme({
  palette: {
    orange: {
      main: "#F1592A",
      contrastText: "#fff",
    },
  },
});
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

export default function AddFood() {
    const [image,setImage]=useState()
  const [foodData, setFoodData] = useState();
  const onChange = (e) => {
    setFoodData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  };



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleAdd = (_id) => {

    const newFood = new FormData();
    newFood.append('title', foodData.title);
    newFood.append('description',foodData.description );
    newFood.append('ingredients',foodData.ingredients );
    newFood.append('image',image[0] );
   
    dispatch(addFood(newFood));
    handleClose();
  };

  return (
    <>
      <Grid item lg={2} textAlign={"end"}>
        <ThemeProvider theme={theme}>
          <Button color="orange" variant="contained" onClick={handleOpen}>
            Add food <AddIcon />
          </Button>
        </ThemeProvider>
      </Grid>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            // sx={{
            //   "& > :not(style)": { m: 1, width: "50ch" },
            // }}
            noValidate
            autoComplete="off"
            onChange={onChange}
            encType="multipart/form-data"
          >
            <Typography variant="h6" component="h2">
              Add new item
            </Typography>

            <TextField
              name="title"
              id="Food"
              label="Food *"
              variant="outlined"
              color="warning"
            />
            <TextField
              name="description"
              id="Categoriec"
              label="Categorie *"
              variant="outlined"
              color="warning"
            />
            <TextField
              name="ingredients"
              id="Price"
              label="Price *"
              variant="outlined"
              color="warning"
            />
            <TextField
              name="history"
              id="Description"
              label="Description *"
              variant="outlined"
              color="warning"
            />
           
            <Input type="file" name="image" onChange={(e)=>setImage(e.target.files)} />
            <Stack spacing={2} direction="row" justifyContent="end">
              <Button variant="outlined" onClick={handleClose} color="warning">
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleAdd()}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
