import React, { useState } from 'react'
import AddFood from './addFood'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectAllFoods,loading } from '../store/features/foodSlice'
import FoodCard from './foodCard'

export default function FoodList() {
    const loadState = useSelector(loading);
    const foods = useSelector(selectAllFoods);

    if (loadState) {
        return (<img  src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" width={"20px"} height={"20px"}/>     )
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid container item lg={10} spacing={2}>
                   {foods.length>0?foods.map((food, id) => <FoodCard key={id} menu={food} />):<p>Food list is empty</p> }  
                   {console.log("foods",foods)}
                </Grid>
                 <AddFood /> 
            </Grid>
        </>
    )

}
