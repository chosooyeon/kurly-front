import styled from 'styled-components';
import SearchFoodItems from "../organisms/SearchFoodItems";
import SearchIngredientItems from "../organisms/SearchIngredientItems";

const Search = () => {
    return(
        <>
            <Title>‘<PurPule>봉골레 파스타</PurPule>’에 대한 검색결과</Title>
            <Grid><SearchFoodItems/></Grid>
            <Grid><SearchIngredientItems/></Grid>
        </>
    )
}

const Grid = styled.div`
    display: flex;
    width: 1050px;
    margin: 0 auto;
`

const Title = styled.div`
  ${(props) => props.theme.font.medium_28_35};
  text-align:center;
`;

const PurPule = styled.span`
    color: ${(props) => props.theme.color.brand};
`;

export default Search;