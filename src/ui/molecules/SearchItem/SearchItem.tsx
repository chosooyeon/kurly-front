import ChipList from "../ChipList/ChipList";
import { Label, Price, Title, Wrap, Section } from "./SearchItem.styled";
import { ImgAsset } from "../../atoms/image/image.styled";

const SearchItem = () => {
    //사진 + 폰트
    return <>
        <Wrap>
            <Section>
                <Label>샛별배송</Label>
                <Title>[KF365] 1+등급 무항생제 대란 20구</Title>
                <Price>5,200원</Price>
                <ChipList chipList={['Kurly Only', '한정수량']}/>
            </Section>
            <Section>
                <ImgAsset />
            </Section>
        </Wrap>
    </>
}

export default SearchItem;