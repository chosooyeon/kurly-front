import * as S from './CartItem.styled'

const CartItem = () => {
    return <>
        <S.Wrap>
            <S.Section>
                <S.Label>샛별배송</S.Label>
                <S.Title>[KF365] 1+등급 무항생제 대란 20구</S.Title>
                <S.Price>5,200원</S.Price>
            </S.Section>
            <S.Section>
                <S.Count>
                    <S.CountInner>-</S.CountInner>
                    <S.CountInner>5</S.CountInner>
                    <S.CountInner>+</S.CountInner>
                </S.Count>
            </S.Section>
        </S.Wrap>
    </>
}

export default CartItem