const DetailBottomSection = (props?:any) => {
    return(
        <>
            <div dangerouslySetInnerHTML={{__html:props?.code}}></div>
        </>
    )
}

export default DetailBottomSection;