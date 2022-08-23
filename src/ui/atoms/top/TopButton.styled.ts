import styled from "styled-components";
import top from '../../../assets/cert.png'

const TopButton = styled.div`
    z-index: 3;
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 56px;
    height: 56px;
    background:url(${top});
`
//     background: url(${top}) center no-repeat;

export { TopButton }
