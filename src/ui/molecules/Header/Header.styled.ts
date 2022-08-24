import styled from 'styled-components';

const Banner = styled.div`
    text-align: center;
    background: rgb(95, 0, 128);
    color: white;
    font-size: 14px;
    line-height: 42px;
`;

const FixHeader = styled.div`
    top: 0;
    z-index: 3;
    background-color: white;
    position: fixed;
    display: inline-flex;
    width: 100%;
    height: 56px;
    margin: 0px auto;

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: rgb(51, 51, 51);
`

const SideUl = styled.ul`
    display: flex;
    float: right;
    font-size: 12px;
    margin: 10px 10px;
`

const SideLi = styled.li`
    margin: 0 10px;
`

const SubHeader = styled.div`
    display: flex;
    height: 100px;
    padding-top: 36px;
`

const MobileHeaderTop = styled.div`
    background-color: ${props => props.theme.color.brand};
`

export { Banner, FixHeader, SideUl, SideLi, SubHeader, MobileHeaderTop }