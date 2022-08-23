import { Row } from './DetailTopSection.styled';
import { Heading5 } from '../../atoms/heading/heading.styled';
import ChipList from '../../molecules/ChipList/ChipList';
import SearchList from '../SearchList/SearchList';
import SquareButton from '../../atoms/button/SquareButton';
import Searchbar from '../../molecules/Searchbar/Searchbar';
import { isMobile } from '../../../service/hooks';

const btnTxt = ['필수 재료','한 번에 담기'];

const DetailSearchWrap = (props:any) => {
    return <>
        <Row>
            <ChipList tags={props?.detail?.post?.tags}/>
            <Searchbar/>
        </Row>
        <Row>
            <Heading5>총 {props?.searchData?.length}개</Heading5>
            <Heading5>개인 맞춤순</Heading5>
        </Row>
        <SearchList/>
        {
            !isMobile() && <>
            <Row>
            <div>
                <Heading5>이런 제품도 있어요!</Heading5>
                <ChipList tags={props?.detail?.tags}/>
            </div>
            <SquareButton txt={btnTxt}/>
        </Row>
            </>
        }
    </>
}

export default DetailSearchWrap