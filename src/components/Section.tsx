import React from 'react'
import styled from 'styled-components'
import { EachCar } from '../features/carsSlice'
import {FaAngleDown} from 'react-icons/fa'
import {Fade} from 'react-reveal'
//
interface PropObject{
    car: EachCar
}

interface WrapProps{
    bgimg: string
}

const Section = ({car}: PropObject) => {
    return (
        <Wrap bgimg={car.image}>
            <Fade bottom>
                <TextSection>
                    <h2>{car.title}</h2>
                    <p>{car.description}</p> 
                </TextSection>
            </Fade>
            <Fade bottom>
                <TextSection>
                    <ButtonSection>
                        <BlackButton>Custom Order</BlackButton>
                        <WhiteButton>Existing Inventory</WhiteButton>
                    </ButtonSection>
                    <DownArrow>
                        <FaAngleDown size={50}/>
                    </DownArrow>
                </TextSection>
            </Fade>

            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    background: url(${(props:WrapProps) => 'assets/images/'+props.bgimg}) center center/cover no-repeat;
`

const TextSection = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* min-height: 50px; */
`

const ButtonSection = styled(TextSection)`
    flex-direction: row;
    justify-content: space-between;
`

const WhiteButton = styled.button`
    width: 300px;
    border-radius: 20px;
    margin: 0 20px;
    padding: 10px;
    color: black;
    background: white;
`

const BlackButton = styled(WhiteButton)`
    color: white;
    background: black;
`

const DownArrow = styled.p`
    animation: animateDown infinite 1.5s;
    overflow: hidden;
`
