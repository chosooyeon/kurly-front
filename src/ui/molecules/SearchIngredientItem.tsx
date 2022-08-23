import food1 from '../../assets/food1.png';

const SearchIngredientItem = () => {
    return(
        <div style={{ marginRight:12 }}>
            <img src={ food1 } width={ 338 } height={ 435 } alt='img'></img>
            <div>샛별배송</div>
            <div>[폰타나] 파스타소스 6종</div>
            <div>2,890 원~</div>
            <div>이탈리아 정통 레시피를 담아낸</div>
        </div>
    )
}

export default SearchIngredientItem;