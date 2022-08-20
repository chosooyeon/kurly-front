import styled from "styled-components";

const Img = styled.div<{path?: string}>`
    width: 464px;
    height: 552px;
    background: url(https://img-cf.kurly.com/shop/data/goods/1620014345838l0.jpg) 0% 0% / cover, url(https://res.kurly.com/_next/static/images/noimg-150x195-2c819ff….svg) 50% 50% / contain no-repeat rgb(245, 245, 245);
`


const ImgFull = styled.div<{path?: string}>`
    width: auto;
    height: 589px;
    background: url(https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/1e8f68bc-793e-44a1-81ef-55acca35187c.jpg);
`

export { Img, ImgFull }