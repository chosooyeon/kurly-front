import { Square } from "./button.styled"
interface ISquareButton {
    txt?: any;
    onHandleExpand?: any;
}

const SquareButton = (props?:ISquareButton) => {
    return <Square onClick={props?.onHandleExpand}>{props?.txt[0]}<br/>{props?.txt[1]}</Square>
}

export default SquareButton