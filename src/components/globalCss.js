import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const Global = createGlobalStyle`
  ${normalize}
  body {
    background-color: #F7F7F7;
    font-family: -apple-system, "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
  }
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

  .embedVideo-container {
  }
`

const GlobalCss = () => {
  return (
    <Global />
  )
}

export default GlobalCss