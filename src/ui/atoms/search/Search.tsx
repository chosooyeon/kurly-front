import styled from 'styled-components';
import xBtn from '../../../assets/xBtn.png'
import searchPurple from '../../../assets/searchPurple.png'

const Search = (props:any) => {
    return(
        <>
            <SearchDiv>
                <SearchInput placeholder="검색어를 입력하세요" value=""/>
                {/* <CloseBtn></CloseBtn> */}
                <SearchBtn></SearchBtn>
            </SearchDiv>
        </>
    )
}

const SearchDiv = styled.div`
    display: flex;
    width: 400px;
    height: 48px;
    padding-left: 14px;
    border: 1px solid rgb(95, 0, 128);
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
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

// const CloseBtn = styled.button`
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 16px;
//     height: 16px;
//     right: 47px;
//     margin-left: 20px;
//     background: url(${xBtn}) center no-repeat;
//     border-width: initial;
//     border-style: none;
//     border-color: initial;
//     border-image: initial;
// `

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

export default Search;