import DetailTopSection from "../organisms/DetailTop/DetailTopSection";
import { searchData } from "../../const";
import { Divider } from "../atoms/divider/divider.styled";
import BottomSheet from "../molecules/BottomSheet/BottomSheet";
import DetailBottomSection from "../organisms/DetailBottomSection";

interface IDetailLayout {
    detail?: any;
}

const DetailLayout = (props?:IDetailLayout) => {
    return(
        <>
            <DetailTopSection search={searchData} detail={props?.detail}/>
            <Divider/>
            <DetailBottomSection code={props?.detail?.post?.content}/>
            <BottomSheet/>
        </>
    )
}

export default DetailLayout;