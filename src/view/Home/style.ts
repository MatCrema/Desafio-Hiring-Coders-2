import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;

    section {
        height: 700px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;

        .product-content {
            display: grid;
            text-align: center;
            height: 300px;
            background: #d0d0d0cc;
            border-radius: 12px;
            padding: 12px;
            margin: 10px;
            font-family: Arial;
        }
    }

    button {
        border-radius: 12px;
    }
`

export const Header = styled.div `
    width: 100%;
    margin: auto;
    background-color: black;

    section {
        height: 70px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 15px;
    }

    h1 {
        font-size: 25pt;
        font-family: Arial, Helvetica, sans-serif;
        color: darkred;
        text-shadow: 0px 1px 20px rgb(155 0 0);
    }

    p {
        color: white;
    }
`

export const Footer = styled.div `
    width: 100%;
    margin: auto;
    background-color: black;

    section {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 12pt;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
    }

    a {
        color: white;
    } 

    a:hover {
            color: red;
    }
`