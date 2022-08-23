import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const Section = styled.div`
    height: 100px;
    align-items: left;
`

const Label = styled.p`
    ${props => props.theme.font.normal_10_12}
`

const Title = styled.p`
    ${props => props.theme.font.normal_13_18}
`

const Price = styled.p`
    ${props => props.theme.font.bold_18_26}
`

export {Wrap, Section, Label, Title, Price}