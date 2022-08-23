import home from '../../assets/icon/home.png'
import hamber from '../../assets/icon/hamberger.png'
import search from '../../assets/icon/searchBlack.png'
import person from '../../assets/icon/person.png'
import styled from 'styled-components';

const MobileBottom = () => {
    return(
        <>
        <MobileFooter>
            <ul style={{display: 'inline-flex'}}>
                <li><BottomImg src={ home }/></li>
                <li><BottomImg src={ hamber }/></li>
                <li><BottomImg src={ search }/></li>
                <li><BottomImg src={ person }/></li>
            </ul>
        </MobileFooter>
        </>
    )
}

const MobileFooter = styled.div`
    text-align: center;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
`

const FooterUl = styled.ul`

`

const BottomImg = styled.img`
    padding: 0 16px;
    width: 24px;
`;

export default MobileBottom