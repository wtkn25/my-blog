import React from 'react';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  blockquote {
    position: relative;
    background-color: #F7F7F7;
    padding: 1em 1em 1em 2.6em;
    font-size: .9em;
    border-left: 5px solid #CCC;
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: '”';
      font-family: sans-serif;
      font-size: 6em;
      opacity: .1;
    }
  }
`

const GlobalCss = () => {
  return (
    <Global />
  )
}

export default GlobalCss