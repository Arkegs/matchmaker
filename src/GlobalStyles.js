import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --selectGreen: #32d135;
        --lightSelectGreen: #58f55b;
        --mainColor: #87a9ff;
        --darkMainColor: #173fa3;
        --lightMainColor: #b5caff;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{
        box-sizing: border-box;
        font-family: "Abel", sans-serif;
    }

    body{
        background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url('https://cutewallpaper.org/21/football-stadium-background-hd/American-Football-Stadium-Nightfootball-Stadium-D-Hd-.jpg') no-repeat fixed center;
    }

    h2{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    .teamGrid{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 50px;
        @media screen and (max-width: 768px){
            flex-direction: column;
            align-items: center;
        }
    }

    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header{
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        box-shadow: 0px 7px 20px 0px rgba(0,0,0,0.5);
        color: white;
        margin: 0 auto 50px;
        width: 90%;
        text-align: center;
        font-size: 1.5em;
        padding: 10px;
        border-bottom-left-radius: 50px 20px;
        border-bottom-right-radius: 50px 20px;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(1,127,152,1) 100%);

        @media screen and (max-width: 768px){
            width: 98%;
        }
    }
`