import * as S from "./search.styled"

const Search = (props:any) => {
    return(
        <>
            <S.SearchDiv>
                <S.SearchInput placeholder="검색어를 입력하세요" value=""/>
                <S.SearchBtn></S.SearchBtn>
            </S.SearchDiv>
        </>
    )
}

export default Search;