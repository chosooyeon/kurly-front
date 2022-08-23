import styled from 'styled-components';
import ProductItem from "../molecules/ProductItem";
import banner from "../../assets/banner.webp";
interface Post {
    result?: any,
    pageTotal?: number,
    total?: number
  }

const PostLayout = (props:any) => {
    // console.log(props.data.results,"props")
    return(
        <>
            <Title>내일 저녁으로 이건 어때요?</Title>
            <div style={{ display:'flex' , width: 1050, margin: '0 auto' }}>
                {/* {
                    props.data.results.map((item:any)=>{
                        <ProductItem {...item} />
                    })
                } */}
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}><img src={ props.thumbnail } width='100%'/></div>
        </>
    )
}

const Title = styled.div`
  ${(props) => props.theme.font.medium_28_35};
  text-align:center;
`;

export default PostLayout;