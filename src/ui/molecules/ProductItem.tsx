import food1 from '../../assets/food1.png';

const ProductItem = () => {
    return(
        <>
            <div>
                <img src={ food1 } width={ 249 } height={ 320 } alt='img'></img>
                <div>[걸어서 샐러드 속으로] 연어 구워 함께 곁들인 콥샐러드</div>
            </div>
        </>
    )
}

export default ProductItem;