import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
    html{
        font-size: 62.5%;
    }

    body {
        width: 100%;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;

export default Base;
