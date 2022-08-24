import styled from 'styled-components';
import xBtn from '../../../assets/xBtn.png'
import searchPurple from '../../../assets/searchBtn.png'

const SearchDiv = styled.div`
    margin-left: 32px;
    display: flex;
    width: 360px;
    height: 48px;
    padding-left: 14px;
    border: 1px solid rgb(95, 0, 128);
    border-radius: 6px;
    background-color: ${props => props.theme.color.white};
    box-shadow: rgb(247 247 247) 0px 0px 0px 1px inset;
`;

const SearchInput = styled.input`
    width: 300px;
    background-color: inherit;
    border: none;
    outline: none;
    font-size: 16px;
    letter-spacing: -0.33px;
`

const SearchBtn = styled.button`
    border:0;
    outline:0;
    position: relative;
    width: 40px;
    height: 40px;
    margin: 10px;
    bottom: 3px;
    background: url(${searchPurple}) 40%;
}
`

export { SearchDiv, SearchInput, SearchBtn }