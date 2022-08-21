import styled from "styled-components";

// 아래 스타일은 테스트용
const Heading1 = styled.h2`
 ${props => props.theme.font.medium_24_34}
 word-break: keep-all;
 width: auto;
 margin: 10px 0;
`
const Heading5 = styled.p`
 ${props => props.theme.font.normal_10_12}
 color: ${props => props.theme.color.grey_2}
`
export { Heading1, Heading5 }