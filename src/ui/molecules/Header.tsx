import styled from 'styled-components';
import SearchPC from '../atoms/search/searchPC'

import kurly from '../../assets/kurly.png';

const Header = () => {
    return(
        <>
            {/* <Banner>지금 가입하고 인기상품 <b>100원</b>에 받아가세요!</Banner> */}
            <div>
                <div style={{ display:'flex', float:'right' }}>
                    <div>회원가입</div>
                    <div>|</div>
                    <div>로그인</div>
                    <div>|</div>
                    <div>고객센터</div>
                </div>
                <div style={{ height: '100', paddingTop: '36' }}>
                    <div>
                        <div><img src={ kurly } width={ 86 } height={ 82 }/></div>
                        {/* <div>마켓컬리</div>
                        <div>|</div>
                        <div>뷰티컬리</div> */}
                    </div>
                    <SearchPC>
                        <input id="gnb_search" placeholder="검색어를 입력해주세요" value=""/>
                        <button></button>
                    </SearchPC>
                    <div></div>
                    <div></div>
                </div>
                {/* <Fixed>
                    <div><HamberImg/></div>
                    지금 가입하고 인기상품 100원에 받아가세요!
                </Fixed> */}
            </div>
        </>
    )
}

const Banner = styled.div`
    text-align: center;
    background: rgb(95, 0, 128);
    color: white;
    font-size: 14px;
    line-height: 42px;
`;

const Fixed = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 100%;
  position: fixed;
  z-index: 101;
  top: 0px;
  left: 0px;
`;

const HamberImg = styled.span`
    width: 16px;
    height: 14px;
    margin-right: 14px;
    background: url("../../assets/hamber.png") no-repeat;
`;

export default Header;