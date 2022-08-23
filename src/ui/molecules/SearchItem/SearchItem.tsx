import ChipList from "../ChipList/ChipList";
import { Label, Price, Title, Wrap, Section } from "./SearchItem.styled";
import { ImgAsset } from "../../atoms/image/image.styled";
import Snackbars from "../../atoms/snackbar/Snackbar";
import { useEffect, useState } from "react";


const SearchItem = () => {
    const [isActive, setActive] = useState<boolean>(false);
    const addCart = () => {
        setActive(v => !v)
    }
    useEffect(() => {
        if(isActive){
            setTimeout(() => {
                setActive(false)
            },1000)
        }
    }, [isActive])
    
    return <>
        <Wrap>
            <Section>
                <Label>샛별배송</Label>
                <Title>[KF365] 1+등급 무항생제 대란 20구</Title>
                <Price>5,200원</Price>
                {/* <ChipList tags={['Kurly Only', '한정수량']}/> */}
            </Section>
            <Section>
                <ImgAsset onClick={addCart}/>
            </Section>
        </Wrap>
        <Snackbars isActive={isActive} txt={'상품이 장바구니에 담겼습니다.'} />
    </>
}

export default SearchItem;