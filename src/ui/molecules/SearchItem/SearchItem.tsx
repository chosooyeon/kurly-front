import { Label, Price, Title, Wrap, Section } from "./SearchItem.styled";
import { ImgAsset } from "../../atoms/image/image.styled";
import Snackbars from "../../atoms/snackbar/Snackbar";
import { useEffect, useState } from "react";


const SearchItem = (props?:any) => {
    const [isActive, setActive] = useState<boolean>(false);
    const addCart = () => {
        setActive(v => !v)
        props?.onPutCart({
            userId:1,
            productId: props?.item?.product_product_id
        })
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
                <Label>{props?.item?.product_delivery}</Label>
                <Title>{props?.item?.product_title}</Title>
                <Price>{props?.item?.product_price}</Price>
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