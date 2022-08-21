// global로 사용할 style 정의
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 16px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow-x: hidden;
  }
  @media ${(props) => props.theme.media.small_ios} {
    html {
      font-size: 14px;
    }
  }

  body {
    margin: auto;
    padding: 0;
    font-family: 'Noto Sans KR', 'sans-serif';
    overflow-x: hidden;
    overflow-y: hidden;
    color: ${(props) => props.theme.color.base};
    width: 1059px;
  }
`;

export default GlobalStyle;