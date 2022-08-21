import DetailTopSection from "../organisms/DetailTopSection";
import { detailData, searchData } from "../../const";

const DetailLayout = () => {
    return(
        <>
            <DetailTopSection search={searchData} detail={detailData}/>
        </>
    )
}

export default DetailLayout;