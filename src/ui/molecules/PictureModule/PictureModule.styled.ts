import styled from "styled-components";
import food2 from '../../../assets/food2.png';
import active from '../../../assets/icon/active.png'
import none from '../../../assets/icon/none.png'
import { isMobile } from "../../../service/hooks";

const Origin = styled.div<{path?:string}>`
    ${isMobile() ? `width: 100vw;`:`width: 562px;` }
    height: 464px;
    background-image: url(${props => props.path});
    background-size: cover;
    background-position: center;
    position: relative;
`

const Pointer = styled.div<{location?:any}>`
    cursor: pointer;
    width: ${props => props.location.isActive?30:13}px;
    height: ${props => props.location.isActive?30:13}px;
    background-image: url(${props => props?.location?.isActive ? active : none});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: ${props => props?.location?.y}%;
    left: ${props => props?.location?.x}%;
`

export {Origin, Pointer}