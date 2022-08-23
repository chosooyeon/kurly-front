import styled from 'styled-components';

const Banner = styled.div`
    text-align: center;
    background: rgb(95, 0, 128);
    color: white;
    font-size: 14px;
    line-height: 42px;
`;

const FixHeader = styled.div`
    z-index: 3;
    background-color: white;
    position: fixed;
    display: inline-flex;
    width: 1050px;
    height: 56px;
    margin: 0px auto;
`

const MobileHeaderTop = styled.div`
    background-color: ${props => props.theme.color.brand};
`

export { Banner, FixHeader, MobileHeaderTop }