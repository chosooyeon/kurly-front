import styled from 'styled-components';
import ProductItem from "../molecules/ProductItem/ProductItem";
import banner from "../../assets/banner.webp";
import CategoryList from '../organisms/Category/CategoryList';
import CategoryMiddle from '../organisms/Category/CategoryMiddle';

interface getPost {
    title?: string;
    data?: {
        post_post_id?: number;
        post_sub_title?: string;
        post_thumbnail?: string;
        post_title?: string;
    }
}

const PostLayout = (props:getPost) => {
    // console.log(props.data.results,"props")
    return(
        <>
            <Title>{props?.title}</Title>
            <CategoryList/>
            <CategoryMiddle/>
            <div style={{ display:'flex' , width: 1050, margin: '0 auto' }}>
                {/* {
                    props.data.results.map((item:any)=>{
                        <ProductItem {...item} />
                    })
                } */}
            </div>
            {/* <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}><img src={ props.thumbnail } width='100%'/></div> */}
        </>
    )
}

const Title = styled.div`
  ${(props) => props.theme.font.medium_28_35};
  text-align:center;
  margin-bottom: 27px;
`;

export default PostLayout;