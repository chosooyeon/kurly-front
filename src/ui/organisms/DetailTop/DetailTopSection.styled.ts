import styled from "styled-components";
import { isMobile } from "../../../service/hooks";

const TopSection = styled.div`
    ${isMobile() ? `display: none;` : `display: flex;`}
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const MTopSection = styled.div`
    ${isMobile() ? `display: block;` : `display: none;`}
    width: 100vw;
    // TODO: swiper slide 버그수정
    height: 100vh;
    padding-bottom: 130px;
`

const RightWrap = styled.div`
    padding: 10px;
    min-width: 450px;
    > div{
        margin-bottom: 15px;
    }
`

const Row = styled.div`
    width: auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

export { TopSection, MTopSection, RightWrap, Row }