import * as S from "../top/TopButton.styled"
import useScrollToggle from './Top';

const MyTopButton = () => {
    const scrollFlag = useScrollToggle(true);

    const moveToTop = () => (document.documentElement.scrollTop = 0);

    return scrollFlag ? (
        <S.TopButton onClick={ moveToTop }></S.TopButton>
    ) : (
        <></>
    )
}

export default MyTopButton