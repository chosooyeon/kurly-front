import { useState } from 'react'
import * as S from './PictureModule.styled'

const PictureModule = (props?:any) => {
    const [focus, setFocus] = useState<number>(99);

    const onClickSearchData = (v:string,i:number) => {
        props?.searchData(v);
        setFocus(i);
    }
    return <>
        <S.Origin path={props?.picture?.image}>
            {
                props?.picture?.tags.map((item:any, i:number) => {
                    return <div key={item?.x} onClick={() => onClickSearchData(item?.keyword,i)}>
                        <S.Pointer location={{x: item?.x, y: item?.y, isActive: i === focus}}/>
                    </div>
                })
            }
        </S.Origin>
    </>
}

export default PictureModule;