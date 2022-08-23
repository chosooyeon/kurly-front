import kurly from '../../../assets/kurly.png';
import location from '../../../assets/Location.png';
import heart from '../../../assets/heart.png';
import cert from '../../../assets/cert.png';
import hamber from '../../../assets/hamber.png';
import Search from '../../atoms/search/Search';
import { useEffect, useState } from 'react';
import throttle from '../../../service/throttle';
import * as S from './Header.styled'

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
                <S.FixHeader>
                    <ul style={{ display:'inline-flex' }}>
                        <li><img src={hamber}/></li>
                        <li>카테고리</li>
                    </ul>
                    <ul style={{ display:'inline-flex' }}>
                        <li>신상품</li>
                        <li>베스트</li>
                        <li>알뜰쇼핑</li>
                        <li>특가/혜택</li>
                    </ul>
                    {/* <ul style={{ display:'inline-flex' }}>
                        <div>찾기</div>
                    </ul> */}
                    <ul style={{ display:'flex', alignItems:'flex-end' }}>
                        <li style={{marginTop:12}}><img width={42} height={42} src={location}/></li>
                        <li><img width={36} height={36} src={heart}/></li>
                        <li><img width={36} height={36} src={cert}/></li>
                    </ul>
                </S.FixHeader>
                </>
                :
                <>
                {/* <S.Banner>지금 가입하고 인기상품 <b>100원</b>에 받아가세요!</S.Banner> */}
                <div style={{ marginBottom:'20px' }}>
                    <S.SideUl>
                        <S.SideLi>회원가입</S.SideLi>
                        <li>|</li>
                        <S.SideLi>로그인</S.SideLi>
                        <li>|</li>
                        <S.SideLi>고객센터</S.SideLi>
                    </S.SideUl>
                    <S.SubHeader>
                        <div>
                            <div><img style={{ marginTop: -20 }} src={ kurly } height={ 82 }/></div>
                            {/* <ul style={{ display:'flex' }}>
                                <li>마켓컬리</li>
                                <li>|</li>
                                <li>뷰티컬리</li>
                            </ul> */}
                        </div>
                        <div style={{textAlign:'center'}}><Search></Search></div>
                        <div>
                            <ul style={{ display:'flex', alignItems:'center' }}>
                                <li><img width={36} height={36} src={location}/></li>
                                <li><img width={30} height={30} src={heart}/></li>
                                <li><img width={30} height={30} src={cert}/></li>
                            </ul>
                        </div>
                    </S.SubHeader>
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

export default Header;