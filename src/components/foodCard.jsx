import * as React from "react";
import { Grid, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { deleteFood } from "../store/features/foodSlice";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

export default function FoodCard(props) {
  const { _id, title, description, ingredients, image } = props.menu;
  const handleClickOpen = () => {
    setopenDialog(true);
  };
  const dispatch = useDispatch();

  const handleCloseDialog = () => setopenDialog(false);
  const [openDialog, setopenDialog] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (_id) => {
    dispatch(deleteFood(_id));
    handleCloseDialog();
  };

  return (
    <Grid item lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={"http://localhost:3000/uploads/" + image}
          alt="Paella dish"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ingredients}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{description}</strong>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Edit" onClick={handleOpen}>
            <ModeEditIcon />
          </IconButton>
          <IconButton aria-label="Delete" onClick={handleClickOpen}>
            <DeleteIcon sx={{ color: "#ff0000" }} />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>history</Typography>
          </CardContent>
        </Collapse>
      </Card>
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
            //     '& > :not(style)': { m: 1, width: '50ch' },
            // }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h6" component="h2">
              Edit food
            </Typography>

            <TextField
              id="Food"
              label="Food *"
              name="title"
              variant="outlined"
              color="warning"
              value={title}
            />

            <TextField
              id="description"
              label="description *"
              name="description"
              variant="outlined"
              color="warning"
              value={description}
            />

            <TextField
              id="ingredients"
              label="ingredients *"
              name="ingredients"
              variant="outlined"
              color="warning"
              value={ingredients}
            />
            <div>
              <img
                width={150}
                height={150}
                src={"http://localhost:3000/uploads/" + image}
              />
            </div>
            <TextField
              id="Photo"
              label="Photo *"
              variant="outlined"
              color="warning"
            />
            
            <Stack spacing={2} direction="row" justifyContent="end">
              <Button variant="outlined" onClick={handleClose} color="warning">
                Cancel
              </Button>
              <Button variant="contained" color="warning">
                Edit
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Confirm deletion</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Are you sure you wahandleDeletent to delete {"This item"}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="warning">
            Cancel
          </Button>
          <Button onClick={() => handleDelete(_id)} color="warning">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
