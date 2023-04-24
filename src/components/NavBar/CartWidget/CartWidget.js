import cart from './assets/cart.svg'


const CartWidget = () => {
    return (
        <div className="cart">
            <img  src={cart} alt="cart-widget"/>
            <p >0</p>
        </div>

    )
}

export default CartWidget