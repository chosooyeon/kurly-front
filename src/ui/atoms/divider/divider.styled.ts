import styled from "styled-components";
import {isMobile} from '../../../service/hooks/index'
// 아래 스타일은 테스트용
const Divider = styled.div`
    
    height: 2px;
    width: 100vw;
    background-color: ${props => isMobile() ? props.theme.color.white : props.theme.color.grey_3};
    margin-bottom: 50px;
`
export {Divider}