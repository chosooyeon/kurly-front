import { useEffect, useState } from "react";
import { getDetail } from "../../service/api";
import DetailLayout from "../templates/DetailLayout";

const Detail = () => {
    const [detail, setDetail] = useState<any>([]);

    useEffect(() => {
        const res = getDetail();
        res.then((d => setDetail(d)));
    },[])
    return(
        <>
            <DetailLayout detail={detail}/>
        </>
    )
}

export default Detail;