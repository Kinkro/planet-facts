import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import background from "../../../public/assets/background-stars.svg";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
    }
    body{
        font-family: 'League Spartan', sans-serif;
        background-color: #070724;
        background-image: url(${background});
        
        /* font-family: 'League Spartan', sans-serif;; */
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Antonio', sans-serif; 
        color: white;

    }
    p{
        color: white;
        font-style: normal;
        font-weight: 400;
        font-style: normal;

    }
    
`;
