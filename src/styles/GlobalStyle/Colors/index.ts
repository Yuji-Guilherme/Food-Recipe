import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
    :root {
        --body-color: #fffdeb;
        --light-primary:  #fffdeb;
        --dark-blue-1: #090e2a;
        --dark-blue-2: #0a1030;
        --light-grey-1: #586084;
        --light-grey-2: #282d46;
        --input-text: #040614;
        --input-placeholder: #b7aaaa;
        --grey-text: #2c3648;
        --grey-tags: #686d88d6;
}
`;

export default Colors;
