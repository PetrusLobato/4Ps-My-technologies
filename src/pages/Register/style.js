import styled from "styled-components";
import { Link } from "react-router-dom";



export const Form = styled.div`

    width: 100%;
    max-width: 400px;
    background-color: var(--grey-3);
    margin: 30px auto;
    border-radius: 5px;
    
    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px 0;
        font-family: var( --font-inter);
    }

    h3{
        font-size: 18px;
        font-weight: 700;
        text-align: center;

    }

    label{
        color: var(--color-white);
        font-size: 12px;
        font-weight: 400;
        width: 80%;
        margin: 0 auto;
    }

    input{
        background-color: transparent;
        border: 1px solid var(--color-white);
        color: var(--color-white);
        font-size: 16px;
        width: 80%;
        height: 48px;
        margin: 0 auto;
        border-radius: 5px;
        padding-left: 10px;

        &::placeholder{
            font-family: var( --font-inter);
            color: var(--grey-1);
        }
    }


    select{
        background-color: transparent;
        border: 1px solid var(--color-white);
        color: var(--grey-1);
        font-size: 16px;
        width: 80%;
        height: 48px;
        margin: 0 auto;
        border-radius: 5px;
        padding-left: 10px;
    }

    p{
        color: var(--grey-1);
        font-size: 12px;
        width: 80%;
        margin: 10px auto;
        text-align: center;
        

    }

    button{
    background-color: rgba(89, 50, 63, 1);
    width: 80%;
    height: 48px;
    margin: 0 auto;
    border-radius: 5px;
    color: var(--color-white);
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    &:disabled{
            cursor: not-allowed;
            opacity: .4;
        }
    }

    .erro{
        color: red;
        margin: 0 auto;
        text-align: left;
    }

        

       

`

export const Container = styled.div`

    width: 90%;
    max-width: 400px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: space-between;


`

export const Figure = styled.figure`

        width: 30%;
        max-width: 370px;
        margin-top: 80px;
        text-align: center;

`

export const Span = styled.div`

    width: 70px;
    min-height: 35px;
    color: var(--color-white);
    background-color: rgba(33, 37, 41, 1);
    border-radius: 5px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    cursor: pointer;
    
`

export const LinkStyle = styled(Link)`
    color: white;
`



