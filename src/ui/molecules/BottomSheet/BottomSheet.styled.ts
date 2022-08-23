import styled from "styled-components"
import { isMobile } from "../../../service/hooks"

const Wrap = styled.div<{expand?:boolean}>`
    ${isMobile() ?`display: block;` :`display: none;`}
    z-index: 3;
    width: 100vw;
    height: ${props => props?.expand ? `60vh` : `68px`};
    position: fixed;
    bottom: 0;
    // display: flex;
    // justify: space-between;
    background-color: ${props => props.theme.color.white};
    border-radius: ${props => props?.expand ? `15px 15px 0` : `0`};
`
const Section = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
`
export { Wrap, Section }