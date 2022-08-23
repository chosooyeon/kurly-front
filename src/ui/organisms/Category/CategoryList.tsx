import banner from '../../../assets/postBanner.png'
import styled from "styled-components";

const CategoryList = () => {
    return(
        <>
            <div>
                <ul><img width={'98%'} src={ banner }></img></ul>
                <UlFont>
                    <li>전체보기</li>
                    <li>국찌개</li>
                    <li>분식</li>
                    <li>고기구이</li>
                    <li>양식</li>
                    <li>중식</li>
                    <li>아시안</li>
                    <li>일식</li>
                </UlFont>
            </div>
        </>
    )
}

const UlFont = styled.ul`
    box-sizing: border-box;
    position: absolute;
    width: 1038px;
    height: 79px;
    border: 1px solid #B5B5B5;
    display:flex;
    ${props => props.theme.font.bold_13_15}
`

export default CategoryList