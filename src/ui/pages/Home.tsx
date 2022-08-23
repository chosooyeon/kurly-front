
import PostLayout from "../templates/PostLayout";
import Paging from "../atoms/paging/Paging";
import { useQuery } from "react-query";
import toast from 'react-hot-toast'
import axios from "axios";
// import useDebounceValue from "../../service/debounce";
interface Post {
    result?: any,
    pageTotal?: number,
    total?: number
  }
  
const url = `https://jj372vsokc.execute-api.ap-northeast-2.amazonaws.com/dev/post?take=0&page=0&keyword=`

const Post = () => {

    const data = useQuery("posts", () => axios.get(url), {
        onError: (error) => toast.error('무언가 잘못되었다'),
    });

    return(
        <>
            <PostLayout/>
            {/* <PostLayout {...data}/>  
            <PostLayout {...data}/>  
            <PostLayout {...data}/>  
            <PostLayout {...data}/>  
            <PostLayout {...data}/> */}
            <Paging/>
        </>
    )
}

export default Post;