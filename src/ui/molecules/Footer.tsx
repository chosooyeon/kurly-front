import styled from 'styled-components';
const footArr = (['컬리소개','컬리소개영상','인재채용','이용약관','개인정보처리방침','이용안내']);

const Footer = () => {
    return(
        <>
        <div>
            <div style ={{display:'flex', width:'50%', float:'left' }}>
                <div>고객행복센터</div>
                <div>
                    <div>1644-1107</div>
                    <div>
                        <FootSub>365고객센터</FootSub>
                        <FootSubGrey>오전 7시 - 오후 7시</FootSubGrey>
                    </div>
                </div>

                <div>
                    <FootBox>카카오톡 문의</FootBox>
                    <div>
                        <FootSub>365고객센터</FootSub>
                        <FootSubGrey>오전 7시 - 오후 7시</FootSubGrey>
                    </div>
                </div>

                <div>
                    <FootBox>1:1 문의</FootBox>
                    <div>
                        <FootSub>24시간 접수 가능</FootSub>
                        <FootSubGrey>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</FootSubGrey>
                    </div>
                </div>

                <div>
                    <FootBox>대량주문 문의</FootBox>
                    <FootSubGrey>비회원의 경우 메일로 문의 바랍니다.</FootSubGrey>
                </div>
            </div>
            <ul style={{display:'flex', width: '50%', float:'right' }}>
                {
                    footArr.map((item)=>(
                        <FootSub>{item}</FootSub>
                    ))
                }
            </ul>
        </div>
            <div>

            </div>
            <div>

            </div>
            
        </>
    )
}
const FootBox = styled.div`
    width: 140px;
    height: 40px;
    margin: 3px 16px 0px 0px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 3px;
    font-weight: 500;
    font-size: 14px;
    color: rgb(51, 51, 51);
    line-height: 22px;
    text-align: center;
`

const FootSub = styled.li`
    ${(props) => props.theme.font.normal_14_22};
`
const FootSubGrey = styled.div`
    ${(props) => props.theme.font.normal_14_22};
    color: ${(props) => props.theme.color.grey_2};
`

export default Footer;