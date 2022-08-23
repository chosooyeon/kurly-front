import * as S from "./button.styled"

interface ISquareFull {
    txt?: any;
    onHandleExpand?: any;
}

const SquareFull = (props?:ISquareFull) => {
    return <S.SquareFull onClick={props?.onHandleExpand}>{props?.txt[0]}<br/>{props?.txt[1]}</S.SquareFull>
}

export default SquareFull