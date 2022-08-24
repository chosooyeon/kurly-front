import styled from "styled-components";
import top from '../../../assets/top.png'

const TopButton = styled.div`
    z-index: 3;
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 46px;
    height: 46px;
    background-size: cover;
    background:url(${top}) center no-repeat;
`

export { TopButton }
