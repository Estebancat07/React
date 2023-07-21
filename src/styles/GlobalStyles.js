import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    :root{
        --white: #F5F5F5;
        --white-menus: #F8F8FF; 
        --grey-light: #e4e4e4;
        --blue-light: #3498DB;
        --blue: #4faaFf;
        --light-blue: #badfff;
        --violet-dark: #af02ff;
        --violet-light:#dfbeff;
        --green-light: #2ECC71;
        --green: #2Eff71;
        --brown-light: #D7CCC8;
        --brown-dark: #B79999;
        --grey-dark: #A9A9A9;
        --black: #132019;
        --orange: #fa4b1f;
        --orange2: #fa7b1f;
        --light-orange: #f0af8f;
        --shadows: rgba(13, 14, 15, 0.3);
        --red: #ff0f2f;
        --yellow: #ff2f;
        --light-yellow: #ffef9f;
        --red-light: #ff3f4f;
        --white-transparent: rgba(230, 230, 230, 0.5);
        --dark-violet: #000b76;
        --soft-black: #273036;
        --light-black: #304040;
    }

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        list-style-type: none;
        font-family: 'Gotham';
    }

    html{
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
    }

    body{
        display: flex;
        flex-direction: column;
        background-color: var(--white);
    }
`