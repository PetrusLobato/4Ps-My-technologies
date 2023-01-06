import styled from "styled-components";

export const Container = styled.div`

    color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(34, 38, 42, 0.7);
    font-family: var(--font-inter);

    section{
        height: 342px;
        width: 30%;
        background-color: black;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border-radius: 5px;

        .headerModal{
            width: 100%;
            height: 50px;
            background-color: var(--grey-3);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            border-radius: 5px 5px 0 0;

        }

        .headerModal > p{
            font-size: 14px;
        }

        .headerModal > span{
            font-size: 16px;
            color: var(--grey-1);
            cursor: pointer;
        }



    }

    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 20px;
        font-family: var(--font-inter);

        p, label{
            font-size: 12px;
            color: var(--grey-1);
        }

        select, input{
            background-color: var(--grey-3);
            border: none;
            color: var(--grey-1);
            padding: 0 10px;
            height: 48px;
            font-size: 16px;
        }

        button{
            background-color: var(--color-primary);
            color: white;
            border-radius: 5px;
            font-weight: 500;
        }

        .erro{
        color: red;
        margin: 0 auto;
        text-align: left;
        }
    }

`