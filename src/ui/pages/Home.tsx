
import PostLayout from "../templates/PostLayout";
import { useQuery } from "react-query";
import toast from 'react-hot-toast'
import axios from "axios";
import useDebounceValue from "../../service/Debounce";

// import { debounce } from 'lodash';
interface Post {
    result?: any,
    pageTotal?: number,
    total?: number
  }
  
const url = `https://jj372vsokc.execute-api.ap-northeast-2.amazonaws.com/dev/post?take=0&page=0&keyword=`

const Post = () => {

    // const query = useQuery("posts", () => axios.get(url), {
    //     onError: (error) => toast.error('무언가 잘못되었다'),
    // });
    
    // const data = useDebounceValue(query, 500);
    // const { status, data, error, isFetching, isLoading } = useReactQuery(
    //     debouncedSearchQuery,
    //     "0"
    // );

    

    return(
        <></>
        // <>
        //     <PostLayout {...data}/>  
        //     <PostLayout {...data}/>  
        //     <PostLayout {...data}/>  
        //     <PostLayout {...data}/>  
        //     <PostLayout {...data}/>  
        // </>
    )
}

export default Post;