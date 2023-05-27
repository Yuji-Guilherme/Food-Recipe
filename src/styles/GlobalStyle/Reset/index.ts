import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
    *, html, body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font: inherit;
    text-decoration: none;
    font-size: 100%;
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
