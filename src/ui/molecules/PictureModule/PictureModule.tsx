import * as S from './PictureModule.styled'
import Slider from '../Slider';

const PictureModule = () => {
    return <>
        <S.Origin>
            <S.Pointer location={{x: 12.5, y: 13.5, isActive: false}}/>
            <S.Pointer location={{x: 50, y: 50, isActive: true}}/>
            <S.Pointer location={{x: 30, y: 15, isActive: false}}/>
            <S.Pointer location={{x: 22, y: 77, isActive: false}}/>
        </S.Origin>
    </>
}

export default PictureModule;