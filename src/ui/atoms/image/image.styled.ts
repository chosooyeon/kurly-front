import styled from "styled-components";
import cart from '../../../assets/button/detail_cart.svg'
import food from '../../../assets/food2.png'
import search from '../../../assets/search.png'

const Img = styled.div<{path?: string}>`
    width: 464px;
    height: 552px;
    background: url(${food});
    background-size: cover;

`

const ImgAsset = styled.div<{props?: any}>`

    width: 25px;
    height: 25px;
    background: url(${cart}) no-repeat center center;
    background-size: contain;
`


const ImgFull = styled.div<{path?: string}>`
    width: auto;
    height: 589px;
    background: url(https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/1e8f68bc-793e-44a1-81ef-55acca35187c.jpg);
`

export { Img, ImgAsset, ImgFull }