import { Square } from "./button.styled"

const SquareButton = (txt?:any) => {
    console.log(txt)
    return <Square>{txt.props[0]}<br/>{txt.props[1]}</Square>
}

export default SquareButton