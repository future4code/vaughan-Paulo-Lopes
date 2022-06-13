import { FormControl, Select } from "@mui/material";
import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: 30% 70%;
    height: 100vh;
    width: 100vw;
    background-color: #6befa3;
    font-family: sans-serif;
`

export const RightSide = styled.div `
    background-color: #6befa3;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    grid-column: 1/2;
    color: white;
`

export const LeftSide = styled.div `
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2/3;
    border-radius: 10% 0% 0% 10% / 70% 50% 50% 70%;
`

export const Numbers = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    

    div{
        display: flex;
        border-radius: 100px;
        height: 10vh;
        width: 10vh;
        margin: 10px;
        justify-content: center;
        align-items: center;
        background-color: white;
        font-size: 35px;
    }
`

export const DateInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LogoType = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
    }
`

export const MiniBox = styled.div `
    display: flex;
    justify-content: center;
`

export const SelectLote = styled(Select) `
    border-radius: 100px;
    outline: none;
    border: none;
    border-color: none;
    :hover {
        border: none;
        outline: none;
    }
`