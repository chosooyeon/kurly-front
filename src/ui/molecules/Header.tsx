import styled from 'styled-components';
import kurly from '../../assets/kurly.png';
import Search from '../atoms/search/Search';
import { useEffect, useState } from 'react';
import throttle from '../../service/throttle';

const Header = () => {
    const [scrollFlag, setScrollFlag] = useState(false); 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const updateScroll = () => {
        const { scrollY } = window;
        const isScrolled = scrollY !== 0;
        setScrollFlag(isScrolled);
      };

    const handleScroll = throttle(updateScroll, 100);

    

    return(
        <>
            {
                scrollFlag
                ?
                <>
                <div style={{position:'fixed'}}>
                    <ul>
                        <li>버튼</li>
                        <li>카테고리</li>
                    </ul>
                    <ul>
                        <li>신상품</li>
                        <li>베스트</li>
                        <li>알뜰쇼핑</li>
                        <li>특가/혜택</li>
                    </ul>
                    <ul>
                        <div>찾기</div>
                    </ul>
                    <ul>
                        <li>버튼</li>
                        <li>버튼</li>
                        <li>버튼</li>
                    </ul>
                </div>
                </>
                :
                <>
                <Banner>지금 가입하고 인기상품 <b>100원</b>에 받아가세요!</Banner>
                <div style={{ position:'fixed' }}>
                    <ul style={{ display:'flex', float:'right' }}>
                        <li>회원가입</li>
                        <li>|</li>
                        <li>로그인</li>
                        <li>|</li>
                        <li>고객센터</li>
                    </ul>
                    <div style={{ display:'flex', height: '100', paddingTop: '36' }}>
                        <div>
                            <div><img src={ kurly } width={ 86 } height={ 82 }/></div>
                            <ul style={{ display:'flex' }}>
                                <li>마켓컬리</li>
                                <li>|</li>
                                <li>뷰티컬리</li>
                            </ul>
                        </div>
                        <Search></Search>
                        <div></div>
                        <div></div>
                    </div>
                    {/* <Fixed>
                        <div><HamberImg/></div>
                        지금 가입하고 인기상품 100원에 받아가세요!
                    </Fixed> */}
                </div>
                </>
            }
            
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