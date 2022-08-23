import styled from "styled-components";

const Chip = styled.div<{isActive?: boolean}>`
    ${props => props.theme.font.normal_10_12}
    text-align: center;
    padding: 5px 10px;
    width: auto;
    height: fit-content;
    background: ${props => props.theme.color.grey_3};
    border-radius: 9px;
    color: ${props => !props.isActive ? props.theme.color.brand : props.theme.color.grey_2}
`

export { Chip }