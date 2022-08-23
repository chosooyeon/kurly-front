import home from '../../assets/icon/home.png'
import hamber from '../../assets/icon/hamberger.png'
import search from '../../assets/icon/searchBlack.png'
import person from '../../assets/icon/person.png'
import styled from 'styled-components';

const MobileBottom = () => {
    return(
        <>
        <div style={{ position:'fixed', bottom:'0' }}>
            <ul>
                <li><BottomImg src={ home }/></li>
                <li><BottomImg src={ hamber }/></li>
                <li><BottomImg src={ search }/></li>
                <li><BottomImg src={ person }/></li>
            </ul>
        </div>
        </>
    )
}

const BottomImg = styled.img`
  width: 24px;
`;

export default MobileBottom