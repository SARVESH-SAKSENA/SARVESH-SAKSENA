import { useSelector } from "react-redux"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    return (
      <div>
        <h1>Cart Items ({cartItems.length})</h1>
        <div>
          {cartItems.map((item , index) => (
            <div key={index}>
              <h2>{item?.card?.info?.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Cart;