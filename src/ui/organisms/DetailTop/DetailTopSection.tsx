import {TopSection, RightWrap, Row, MTopSection} from './DetailTopSection.styled';
import { Heading1 } from '../../atoms/heading/heading.styled';
import PictureModule from '../../molecules/PictureModule/PictureModule';
import Slider from '../../molecules/Slider/Slider';
import DetailSearchWrap from './DetailSearchWrap';
import { getSearch } from '../../../service/api';

interface IDetailTopSection {
    detail?: {
        isScrap?: boolean;
        post?: {
            postId: number;
            content: string;
            title: string;
            subTitle: string;
            category: string;
            thumbnail: string;
            tags: any;
        },
    }
    search?: any
}

const DetailTopSection = (props?:IDetailTopSection) => {
    const onSearchData = (v?:string) => {
        const res = getSearch(v);
        res.then((r) => console.log(r))
    }
    return (
        <>
        <Heading1>{props?.detail?.post?.title}</Heading1>
        {/* <ImgFull/> */}
        <TopSection>
            <PictureModule searchData={onSearchData} picture={props?.detail?.post}/>
            <RightWrap>
                <DetailSearchWrap {...props}/>
            </RightWrap>
        </TopSection>
        <MTopSection>
            <Slider searchData={onSearchData} {...props}></Slider>
        </MTopSection>
        </>
    )
}

export default DetailTopSection;