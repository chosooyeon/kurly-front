import {TopSection, RightWrap, Row, MTopSection} from './DetailTopSection.styled';
import { Heading1 } from '../../atoms/heading/heading.styled';
import PictureModule from '../../molecules/PictureModule/PictureModule';
import Slider from '../../molecules/Slider';
import DetailSearchWrap from './DetailSearchWrap';

interface IDetailTopSection {
    detail?: {
        title?: string;
        chipList?: any;
        relList?: any;
    };
    search?: any
}

const DetailTopSection = (props:IDetailTopSection) => {
    return (
        <>
        <Heading1>{props?.detail?.title}</Heading1>
        {/* <ImgFull/> */}
        <TopSection>
            <PictureModule/>
            <RightWrap>
                <DetailSearchWrap {...props}/>
            </RightWrap>
        </TopSection>
        <MTopSection>
            <Slider {...props}></Slider>
        </MTopSection>
        </>
    )
}

export default DetailTopSection;