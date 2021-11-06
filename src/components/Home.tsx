import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../app/store'
import {setCars} from '../features/carsSlice'
import Section from './Section'

const Home = () => {

    const dispatch = useDispatch();
    const cars = useSelector((state:RootState) => state.cars.values)

    const getData = useEffect(() => {
        const somefunction = async() => {
            const res = await fetch('http://localhost:8000/cars');
            const data = await res.json(); 
            console.log('Data is ',data);
            dispatch(setCars(data));
        }

        somefunction(); 
        
    }, [])

    

    return (
        <>
            {/* <p>{cars.length}</p> */}
            {cars.length > 0 && cars.map((car, index) => (<Section car={car} key={index}/>))}
        </>
        
    )
}

export default Home


