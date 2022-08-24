import food1 from '../../../assets/food1.png';
import cert from '../../../assets/addCert.png';
import * as S from './ProductItem.styled'
import { useNavigate } from "react-router-dom";

const ProductItem = (props:any) => {
    const navigate = useNavigate();

    return(
        <>
            <div onClick={() => navigate("/detail")}>
                <img src={ food1 } width={ 249 } height={ 320 } alt='img'>
                </img>
                <div><S.CertBtn><img src={cert}/></S.CertBtn></div>
                <S.SubTitle>[걸어서 샐러드 속으로] 연어 구워 함께 곁들인 콥샐러드</S.SubTitle>
                <S.Pay>5,700 원</S.Pay>
            </div>
        </>
    )
}

export default ProductItem;