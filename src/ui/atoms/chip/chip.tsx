import * as S from "./chip.styled"

const Chip = (props?: any) => {
    return <S.Chip>{props?.item.keyword}</S.Chip>
}

export default Chip