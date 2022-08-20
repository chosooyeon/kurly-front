import Chip from '../../atoms/chip/chip'
import {Wrap} from './ChipList.styled'
interface IChipList {
    chipList: any;
}

const ChipList = (props?:IChipList) => {
    console.log(props?.chipList)
    return <>
        <Wrap>
            {props?.chipList.map((item:string, i:number) => {
                return <Chip item={item}/>
            })}
        </Wrap>
    </>
}

export default ChipList