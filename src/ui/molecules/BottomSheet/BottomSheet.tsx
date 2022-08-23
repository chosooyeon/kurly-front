import { useState } from "react"
import SearchFull from '../../atoms/button/SquareFull'
import { ImgAsset } from "../../atoms/image/image.styled"
import CartList from "../../organisms/CartList/CartList"
import { Wrap, Section } from "./BottomSheet.styled"
import Backdrop from '@mui/material/Backdrop';

const BottomSheet = () => {
    const [isExpand, setExpand] = useState<boolean>(false)
    const handleExpand = () => {
        setExpand(v => !v)
    }


    return <>
        {/* <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer - 1 }}
            open={isExpand}
            onClick={handleExpand}
        ></Backdrop> */}
        <Wrap expand={isExpand}>
            {isExpand ? 
                <>
                    <CartList />
                    <SearchFull onHandleExpand={handleExpand} txt={['N개의 상품 담기']}/>
                </>
            : 
                <Section>
                    <ImgAsset/>
                    <SearchFull onHandleExpand={handleExpand} txt={['한 번에 장바구니에 담기']}/>
                </Section>
            }
        </Wrap>
    </>
}

export default BottomSheet