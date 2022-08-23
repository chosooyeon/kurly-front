import styled from 'styled-components';

const MobileHeader = () => {
    return(
    <>
    <div style={{ position:'fixed', width:'100%' }}>
        <MobileHeaderTop>
            <img></img>
            <div></div>
            <img/>
            <img/>
        </MobileHeaderTop>
        <div style={{ backgroundColor:'white' }}>
            <ul style={{ display: 'inline-flex' }}>
                <li>컬리추천</li>
                <li>신상품</li>
                <li>베스트</li>
                <li>알뜰쇼핑</li>
                <li>특가/혜택</li>
            </ul>
        </div>
    </div>
    </>
    )
}

const MobileHeaderTop = styled.div`
    background-color: ${props => props.theme.color.brand};
`

export default MobileHeader