import {TopSection, RightWrap, Row, MTopSection} from './DetailTopSection.styled';
import { Heading1 } from '../../atoms/heading/heading.styled';
import PictureModule from '../../molecules/PictureModule/PictureModule';
import Slider from '../../molecules/Slider/Slider';
import DetailSearchWrap from './DetailSearchWrap';
import { getSearch } from '../../../service/api';
import { useAppDispatch, useAppSelector } from '../../../service/store/config';
import {useEffect, useState} from 'react';

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
}

const DetailTopSection = (props?:IDetailTopSection) => {
    const { value } = useAppSelector(state => state.searchData);
    const dispatch = useAppDispatch();
    const [result , setResult] = useState<any>('')

    const onSearchData = (v?:string) => {
        const res = getSearch(v);
        res.then((r) => {
            console.log(r);
            setResult(r);
            dispatch(r);
        })
    }

    useEffect(() => {
        onSearchData(props?.detail?.post?.tags[0].keyword)
    },[props])

    return (
        <>
        <Heading1>{props?.detail?.post?.title}</Heading1>
        {/* <ImgFull/> */}
        <TopSection>
            <PictureModule searchData={onSearchData} picture={props?.detail?.post}/>
            <RightWrap>
                <DetailSearchWrap searchDataa={result} {...props}/>
            </RightWrap>
        </TopSection>
        <MTopSection>
            <Slider searchData={onSearchData} searchDataa={result} {...props}></Slider>
        </MTopSection>
        </>
    )
}

export default DetailTopSection;