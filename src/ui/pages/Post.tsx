import styled from 'styled-components';
import ProductItem from "../molecules/ProductItem";

const Post = () => {
    return(
        <>
            <Title>내일 저녁으로 이건 어때요?</Title>
            <div style={{ display:'flex' , width: 1050, margin: '0 auto' }}>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </>
    )
}

const Title = styled.div`
  ${(props) => props.theme.font.medium_28_35};
  text-align:center;
`;

export default Post;