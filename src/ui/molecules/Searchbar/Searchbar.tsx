import { ImgAsset } from "../../atoms/image/image.styled";
import { Wrap, SearchInput } from "./Searchbar.styled";
import search from '../../../assets/search.png';

const Searchbar = () => {
    return <>
        <Wrap>
            <img src={search} width={15}/>
            <SearchInput placeholder="검색"/>
        </Wrap>
    </>
}

export default Searchbar;