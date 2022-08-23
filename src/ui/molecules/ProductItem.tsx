import styled from 'styled-components';
import food1 from '../../assets/food1.png';
import cert from '../../assets/cert.png';

const ProductItem = (props:any) => {
    return(
        <>
            <div>
                <img src={ food1 } width={ 249 } height={ 320 } alt='img'>
                </img>
                <div style={{marginTop:'-70px', float:'right', zIndex:101}}><button><img src={cert}/></button></div>
                <SubTitle>[걸어서 샐러드 속으로] 연어 구워 함께 곁들인 콥샐러드</SubTitle>
                <Pay>5,700 원</Pay>
            </div>
        </>
    )
}

const SubTitle = styled.div`
  ${(props) => props.theme.font.normal_16_18};
  padding-top:14px;
  padding-right:10px;
`;

const Pay = styled.div`
  ${(props) => props.theme.font.bold_16_26};
  padding-top:8px;
`;


export default ProductItem;