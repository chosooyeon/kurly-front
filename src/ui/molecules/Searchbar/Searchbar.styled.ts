import styled from "styled-components"

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 5px;
    width: 118px;
    height: 30px;
    background-color: ${props=> props.theme.color.grey_3};
    border-radius: 6px;
`

const SearchInput = styled.input`
    background-color: inherit;
    border: none;
    outline: none;
    width: 70px;
    margin-left: 8px;
    padding-top: 3px;
    ${props=> props.theme.font.normal_13_18}
`
export {Wrap, SearchInput}