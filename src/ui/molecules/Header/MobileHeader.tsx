import * as S from './Header.styled'

const MobileHeader = () => {
    return(
    <>
    <div style={{ position:'fixed', width:'100%' }}>
        <S.MobileHeaderTop>
            <img></img>
            <div></div>
            <img/>
            <img/>
        </S.MobileHeaderTop>
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

export default MobileHeader