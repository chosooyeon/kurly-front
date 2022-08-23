import banner from '../../../assets/postBanner.png'

const CategoryList = () => {
    return(
        <>
            <div>
                <ul><img src={ banner }></img></ul>
                <ul>
                    <li>전체보기</li>
                    <li>국찌개</li>
                    <li>분식</li>
                    <li>고기구이</li>
                    <li>양식</li>
                    <li>중식</li>
                    <li>아시안</li>
                    <li>일식</li>
                </ul>
            </div>
        </>
    )
}

export default CategoryList