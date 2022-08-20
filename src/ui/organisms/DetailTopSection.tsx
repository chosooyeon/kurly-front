import {TopSection, RightWrap} from './DetailTopSection.styled';
import { Heading1 } from '../atoms/heading/heading.styled';
import ChipList from '../molecules/ChipList/ChipList';
import SearchList from './SearchList';
import { Img, ImgFull } from '../atoms/image/image.styled'
interface IDetailTopSection {
    title?: string;
    chipList?: any;
}

const DetailTopSection = (props:IDetailTopSection) => {
    return (
        <>
        <Heading1>{props?.title}</Heading1>
        {/* <ImgFull/> */}
        <TopSection>
            <Img />
            <RightWrap>
                <ChipList chipList={props?.chipList}/>
                <p>여기는 검색창</p>
                <p>여기는 검색창</p>
                <p>여기는 검색창</p>
                <SearchList/>
                <p>여기는 검색창</p>
                <p>여기는 검색창</p>
                <p>여기는 검색창</p>
                
            </RightWrap>
        </TopSection>
        </>
    )
}

export default DetailTopSection;