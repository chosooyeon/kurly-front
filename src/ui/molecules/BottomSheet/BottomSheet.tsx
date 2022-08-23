import { useState } from "react"
import SquareButton from "../../atoms/button/SquareButton"
import { Img, ImgAsset } from "../../atoms/image/image.styled"
import CartList from "../../organisms/CartList/CartList"
import { Wrap, Section } from "./BottomSheet.styled"

const BottomSheet = () => {
    const [isExpand, setExpand] = useState<boolean>(false)
    const handleExpand = () => {
        // setExpand(true)
        // console.log(isExpand)
        console.log('fnkjsfljsnlf')
    }

    return <>
    <Wrap expand={isExpand}>
        {isExpand ? 
            <CartList />
         : 
            <Section>
                <ImgAsset/>
                <SquareButton onClick={handleExpand} props={['한 번에 장바구니에 담기']}/>
            </Section>
        }
    </Wrap>
    </>
}

export default BottomSheet