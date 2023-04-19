import { createGlobalStyle } from 'styled-components';

import colors from './configs/colors';

import mediaQueries from './configs/mediaQueries';

const GlobalStyle = createGlobalStyle`
  :root {
                --base-font-size: 16px;
                --header-height: 40px;
                --footer-height: 520px;

                ${mediaQueries.tablet} {
                        --header-height: 50px;
                        --footer-height: 445px;
                        --bottom-cta-height: 120px;
                }

                ${mediaQueries.laptopS} {
                        --header-height: 60px;
                        --footer-height: 310px;
                }
        }

        /* Works on Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: ${colors.greyDark} ${colors.grey};
          
          &:focus-visible {
            outline: none;
          }
        }

        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }

        *::-webkit-scrollbar-track {
          background: ${colors.grey};
        }

        *::-webkit-scrollbar-thumb {
          background-color: ${colors.greyDark};
          border-radius: 8px;
          border: 2px solid ${colors.grey};
        }
        
        html {
          font-size: 62.5%;
        }
        
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    box-sizing: border-box;
    font-family: Manrope, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    
  }

  body.no-scroll {
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea, select, input {
    outline: unset;
    border: 0;
  }

  a {
    text-decoration: none;

    svg {
      vertical-align: middle;
    }
  }

  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border:inherit;
    -webkit-text-fill-color: unset;
    -webkit-box-shadow: inherit;
    transition: background-color 5000s ease-in-out 0s;
  }

  html,
  body {
    height: 100%;
  }
`;

export default GlobalStyle;
