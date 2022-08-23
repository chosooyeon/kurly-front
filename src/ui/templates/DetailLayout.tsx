import DetailTopSection from "../organisms/DetailTop/DetailTopSection";
import { detailData, searchData } from "../../const";
import { Divider } from "../atoms/divider/divider.styled";
import BottomSheet from "../molecules/BottomSheet/BottomSheet";

const DetailLayout = () => {
    return(
        <>
            <DetailTopSection search={searchData} detail={detailData}/>
            <Divider/>
            <BottomSheet/>
        </>
    )
}

export default DetailLayout;