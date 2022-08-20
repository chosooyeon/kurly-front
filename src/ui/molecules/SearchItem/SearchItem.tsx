import ChipList from "../ChipList/ChipList";
import { Label, Price, Title, Wrap } from "./SearchItem.styled";

const SearchItem = () => {
    //사진 + 폰트
    return <>
        <Wrap>
            <Label>샛별배송</Label>
            <Title>[KF365] 1+등급 무항생제 대란 20구</Title>
            <Price>5,200원</Price>
            <ChipList chipList={['Kurly Only', '한정수량']}/>
        </Wrap>
    </>
}

export default SearchItem;