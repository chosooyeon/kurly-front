import styled from 'styled-components';
import xBtn from '../../../assets/xBtn.png'
import searchPurple from '../../../assets/searchPurple.png'

const SearchDiv = styled.div`
    display: flex;
    width: 400px;
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
    background: url(${searchPurple}) center no-repeat;
}
`

export { SearchDiv, SearchInput, SearchBtn }