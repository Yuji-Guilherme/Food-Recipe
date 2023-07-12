import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
    *, html, body {
        font: inherit;
        font-size: 100%;
        border: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
export default Reset;
