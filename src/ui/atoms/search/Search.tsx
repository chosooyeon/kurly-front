import styled from 'styled-components';

const Search = (props:any) => {
    return(
        <>
            <SearchDiv>
                <SearchInput placeholder="검색어를 입력하세요" value=""/>
                <CloseBtn></CloseBtn>
                <SearchBtn></SearchBtn>
            </SearchDiv>
        </>
    )
}

const SearchDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    left: 325px;
    top: -55px;
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
const CloseBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    right: 47px;
    margin-left: 20px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjOTk5IiBvcGFjaXR5PSIuNSIgY3g9IjgiIGN5PSI4IiByPSI4Ii8+CiAgICAgICAgPGcgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICAgICAgPHBhdGggZD0ibTEwLjg5NyAxMC43ODYtNS43Ny01Ljc2OU01LjEyMiAxMC43ODVsNS43NzUtNS43NzUiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) 0% 0% / 16px 16px no-repeat transparent;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
`

const SearchBtn = styled.button`
    position: relative;
    width: 30px;
    height: 30px;
    margin: 10px;
    bottom: 3px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) 0px 0px no-repeat;
}
`

export default Search;