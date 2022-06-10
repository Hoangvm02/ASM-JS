import Cart from "../conponents/Cart"
import Footer from "../conponents/Footer"
import Header from "../conponents/Header"

const CartPage = {
    render: () =>{
        return`
        <div>${Header.render()}</div>
        <div>${Cart.render()}</div>
        <div>${Footer.render()}</div>

        
        `
    }
}
export default CartPage