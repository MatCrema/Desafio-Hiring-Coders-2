import { createGlobalStyle } from 'styled-components';
import Background from './components/images/bg1.jpg';

export default createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    html {
    scroll-behavior: smooth;
    }

    body {
        background-image: url(${Background});
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
    }
`