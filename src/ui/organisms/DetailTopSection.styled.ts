import styled from "styled-components";

const TopSection = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const RightWrap = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
`

export { TopSection, RightWrap }