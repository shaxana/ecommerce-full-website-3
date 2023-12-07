import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setMealsData } from '../../redux/slices/mealsSlice';
import { useEffect } from 'react';
import axios from 'axios';
function createData(name, calories, fat, carbs, protein) {  
    return { name, calories, fat, carbs, protein };
}
function Dashboard() {
    const dispatch = useDispatch()
    const meals = useSelector((state) => state.meals.data)
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = () => {
        axios
          .get("http://localhost:3000/meals")
          .then((res) => {
            dispatch(setMealsData(res.data));
          })
          .catch((err) => console.error(err));
      };
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'><h1 style={{color:'red'}}>BestSellers</h1></TableCell>
                        <TableCell align='center'><h1 style={{color:'red'}}>Most Favorited Meals</h1></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {meals && meals.map((meal) => (
                        <TableRow
                            key={meal.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align='center'>
                                {meal.name}
                            </TableCell>
                            <TableCell align='center' >{meal.price}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>


    )

}
export default Dashboard