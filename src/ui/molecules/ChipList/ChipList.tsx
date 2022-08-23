import Chip from '../../atoms/chip/chip'
import {Wrap} from './ChipList.styled'
interface IChipList {
    tags?: any;
}

const ChipList = (props?:IChipList) => {
    return <>
        <Wrap>
            {props?.tags?.map((item:any, i:number) => {
                return <Chip key={i} item={item}/>
            })}
        </Wrap>
    </>
}

export default ChipList