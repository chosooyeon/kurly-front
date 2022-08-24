import * as S from './category.styled'

const CategoryMiddle = () => {
    return(
        <>
            <div style={{display:'inline-block', float:'right', paddingTop: '90px', paddingRight:24}}>
                {/* <ul>총 10건</ul> */}
                <S.sortUl>
                    <S.sortli>개인맞춤순</S.sortli>
                    <S.sortli>추천순</S.sortli>
                    <S.sortli>신상품순</S.sortli>
                    <S.sortli>판매량순</S.sortli>
                    <S.sortli>혜택순</S.sortli>
                    <S.sortli>낮은가격순</S.sortli>
                    <S.sortli>높은가격순</S.sortli>
                </S.sortUl>
            </div>
        </>
    )
}



export default CategoryMiddle