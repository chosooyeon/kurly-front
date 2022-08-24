import styled from "styled-components";

const UlFont = styled.ul`
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    position: absolute;
    width: 1038px;
    height: 79px;
    border: 1px solid #B5B5B5;
    display:flex;
    ${props => props.theme.font.bold_13_15}
`

const sortUl = styled.ul`
    display:flex;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #888888;
`

const sortli = styled.li`
    margin-left:12px
`

export { sortUl, UlFont, sortli }