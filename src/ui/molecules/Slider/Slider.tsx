import { Swiper, SwiperSlide } from 'swiper/react';
import DetailSearchWrap from '../../organisms/DetailTop/DetailSearchWrap';
import PictureModule from '../PictureModule/PictureModule';
import * as S from '../PictureModule/PictureModule.styled'
import { Slide } from './Slider.styled';

const Slider = (props:any) => {
    return <>
        <Slide
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><PictureModule searchData={props?.searchData} picture={props?.detail?.post}/></SwiperSlide>
            <SwiperSlide><DetailSearchWrap {...props}/></SwiperSlide>
        </Slide>
    </>
}

export default Slider;