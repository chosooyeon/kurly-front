import { Swiper, SwiperSlide } from 'swiper/react';
import DetailSearchWrap from '../../organisms/DetailTop/DetailSearchWrap';
import PictureModule from '../PictureModule/PictureModule';
import * as S from '../PictureModule/PictureModule.styled'
import { Slide } from './Slider.styled';

const Slider = (props:any) => {
    return <>
        <Slide>
        {/*    <SwiperSlide>*/}
                <PictureModule searchData={props?.searchData} picture={props?.detail?.post}/>
            {/*</SwiperSlide>*/}
            {/*<SwiperSlide>*/}
                <DetailSearchWrap searchDataa={props?.searchDataa} {...props}/>
            {/*</SwiperSlide>*/}
        </Slide>
    </>
}

export default Slider;