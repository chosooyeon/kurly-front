import styled from "styled-components";

// 아래 스타일은 테스트용
const Divider = styled.div`
 height: 2px;
 width: 100vw;
 background-color: ${props => props.theme.color.grey_3};

`
export {Divider}