import {TopSection, RightWrap, Row} from './DetailTopSection.styled';
import { Heading1, Heading5 } from '../atoms/heading/heading.styled';
import ChipList from '../molecules/ChipList/ChipList';
import SearchList from './SearchList';
import { Img, ImgFull } from '../atoms/image/image.styled'
import SquareButton from '../atoms/button/SquareButton';
import SearchBar from '../molecules/SearchBar';
// TODO: 추후 selectbox 수정
interface IDetailTopSection {
    detail?: {
        title?: string;
        chipList?: any;
        relList?: any;
    };
    search?: any
}
const btnTxt = ['필수 재료','한 번에 담기'];

const DetailTopSection = (props:IDetailTopSection) => {
    return (
        <>
        <Heading1>{props?.detail?.title}</Heading1>
        {/* <ImgFull/> */}
        <TopSection>
            <Img />
            <RightWrap>
                <Row>
                    <ChipList chipList={props?.detail?.chipList}/>
                    <SearchBar/>
                </Row>
                <Row>
                    <Heading5>총 {props?.search.length}개</Heading5>
                    <Heading5>개인 맞춤순</Heading5>
                </Row>
                <SearchList/>
                <Row>
                    <div>
                        <Heading5>이런 제품도 있어요!</Heading5>
                        <ChipList chipList={props?.detail?.relList}/>
                    </div>
                    <SquareButton props={btnTxt}/>
                </Row>
            </RightWrap>
        </TopSection>
        </>
    )
}

export default DetailTopSection;