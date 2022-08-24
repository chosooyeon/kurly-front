
import PostLayout from "../templates/PostLayout";
import { useQuery } from "react-query";
import toast from 'react-hot-toast'
import axios from "axios";

interface myPost {
    post_post_id?: number;
    post_sub_title?: string;
    post_thumbnail?: string;
    post_title?: string;
}

const url = `https://jj372vsokc.execute-api.ap-northeast-2.amazonaws.com/dev/post?take=0&page=0&keyword=`

const Post = () => {
    // const data = useQuery("posts", () => axios.get(url), {
    //     onError: (error) => toast.error('무언가 잘못되었다'),
    // });

    // console.log(data.data.results,"data")

    return(
        <>
            {/* <PostLayout title={'그대를 위한 하루 한끼'} data={...data<myPost>}  />   */}
            {/* <PostLayout {...data}/>   */}
        </>
    )
}
export default Post;