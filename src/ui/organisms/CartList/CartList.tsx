import CartItem from '../../molecules/CartItem/CartItem'
import {Wrap} from './CartList.styled'

const CartList = () => {
    return <>
    <Wrap>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </Wrap>
    
    </>
}

export default CartList