import styled from "styled-components";

const TopSection = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
const RightWrap = styled.div`
    padding: 10px;

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

export { TopSection, RightWrap, Row }