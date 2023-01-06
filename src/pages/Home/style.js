import styled from "styled-components";
import { Link } from "react-router-dom";



export const Form = styled.form`

        width: 80%;
        max-width: 370px;
        height: 502px;

        background-color: var(--grey-3);
        margin: 0 auto;
        display: flex;
        margin-top: 20px;
        gap: 15px;

        flex-direction: column;
        border-radius: 5px;

        font-family: var(--font-inter);
        padding: 20px 0;


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
        }

        p{
            color: var(--color-white);
            font-size: 12px;
            width: 80%;
            margin: 25px auto;
            text-align: center;
            

        }

        button{
        background-color: var(--color-primary);
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

        &:disabled{
            cursor: not-allowed;
            opacity: 0.4;
            
        }
        
        }

        .erro{
        color: red;
        margin: 0 auto;
        text-align: left;
    }



`

export const LinkStyle = styled(Link)`

        width: 80%;
        height: 48px;
        margin: 0 auto;
        border-radius: 5px;
        color: var(--color-white);
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey-1);
        

` 

export const H1 = styled.h1`

        width: 80%;
        max-width: 370px;
        margin: 0 auto;
        margin-top: 80px;
        text-align: center;
        color:  var(--color-primary);
        font-family: var(--font-inter);

`