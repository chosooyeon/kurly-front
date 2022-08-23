import * as S from "./TopButton.styled"
import useScrollToggle from './Top';

const MyTopButton = () => {
    const scrollFlag = useScrollToggle(false);

    const moveToTop = () => (document.documentElement.scrollTop = 0);

    // return scrollFlag ? (
    //     <S.TopButton></S.TopButton>
    // )
}

export default MyTopButton