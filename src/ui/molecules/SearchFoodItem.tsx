import food1 from '../../assets/food1.png';

const SearchFoodItem = () => {
    return(
        <div style={{ marginRight:12 }}>
            <img src={ food1 } width={ 338 } height={ 435 } alt='img'></img>
            <div>하루한끼</div>
            <div>[걸어서 샐러드 속으로] 연어 구워 함께 곁들인 콥샐러드</div>
            <div></div>
            <div>파스타면 조개 토마토 레몬 올리브유</div>
        </div>
    )
}

export default SearchFoodItem;