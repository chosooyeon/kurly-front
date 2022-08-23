import styled from "styled-components"

const Wrap = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
`
const Section = styled.div`
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
const Count = styled.div`
    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(221, 223, 225);
    width: 101px;
    border-radius: 4px;
`

const CountInner = styled.div`
    width: 34px;
    padding: 10px 0;
    text-align: center;
`
export {Wrap, Section, Label, Title, Price, Count, CountInner}