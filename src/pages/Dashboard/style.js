import styled from "styled-components";

export const Div = styled.div`

    height: 80px;
    border-bottom: 1px solid var(--grey-1);
    width: 100%;
    display: flex;
    align-items: center;
    font-family: var(--font-inter);

    section{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
    }

    h2{
        font-size: 18px;
    }

    p{
        color: var(--color-white);
        font-size: 12px;
        
    }
    

`

export const Figure = styled.figure`

        width: 9%;
        max-width: 370px;
        text-align: inherit;

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
    cursor: pointer;

    button{
        color: white;
        background-color: transparent;
        border: none;
        font-size: 16px;
    }
    
`

export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: var(--font-inter);

    div{
        width: 80%;
        display: flex;
        justify-content: space-between;


        span{
            color: white;
            margin: 20px 0;
            height: 35px;
            width: 35px;
            background-color: var(--grey-3);
            text-align: center;
            border-radius: 5px;
            cursor: pointer;

        }
    }

    h3{
        font-size: 20px;
        margin: 20px 0;
    }

    ul{
        width: 80%;
        margin: 0 auto;
        display: flex;
        background-color: var(--grey-3);
        border-radius: 5px;
        padding: 20px;
        flex-direction: column;
        gap: 10px;


        li{
            height: 50px;
            width: 95%;
            margin: 0 auto;
            padding: 0 15px;
            background-color: var(--color-list);
            border-radius:5px;
            display: flex;
            color: white;
            justify-content: space-between;
            align-items: center;


            .trash{
                width: 40%;
                justify-content: flex-end;
                display: flex;
                gap: 50px;
                align-items: center;


                p{
                    font-size: 15px;
                    font-weight: 400;
                    color: var(--grey-1);
                }

                svg{
                    width: 17px;
                    min-width: 10px;
                    cursor: pointer;
                }


            };
        }
    }

`
