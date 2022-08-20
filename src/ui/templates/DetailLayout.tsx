import DetailTopSection from "../organisms/DetailTopSection";
import { detailData } from "../../const";

const DetailLayout = () => {
    return(
        <>
            <DetailTopSection {...detailData}/>
        </>
    )
}

export default DetailLayout;