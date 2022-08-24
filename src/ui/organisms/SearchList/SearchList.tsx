import SearchItem from "../../molecules/SearchItem/SearchItem"
import {Wrap} from './SearchList.styled'
import { useAppSelector } from '../../../service/store/config';
import { putCart } from "../../../service/api";
import { useEffect } from "react";


const SearchList = (props?:any) => {
    const { value } = useAppSelector(state => state.searchData);
    const onPutCart = (v?:any) => {
        const res = putCart(v);
        res.then((r) => console.log(r))
    }

    return <>

    <Wrap>
        {props?.res?.map((item:any) => {
            return <SearchItem onPutCart={onPutCart} item={item}/>
        })}
    </Wrap>
    
    </>
}

export default SearchList