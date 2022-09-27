import { CartContext, useCartContext } from "../../context/CartContext";
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useCartContext(CartContext)

    if (cart.length === 0) {
        return(
            <div className="container my-5">
                <h2>El carrito está vacío</h2>
                <hr/>
                <Link to="/" className='btn btn-primary'>Ir a comprar</Link>
            </div>
        )
    }

    return(
        <div>
            <h2>Carrito de compras</h2>
            <hr/>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <h4>Precio: AR$ {item.precio}</h4>
                    <h4>Cantidad: {item.cantidad}</h4>
                    <h4>Variante: {item.variante}</h4>
                    <button onClick={() => removeItem(item.id)}><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))}
        
            <h3>Total: AR${cartTotal()}</h3>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar el carrito</button>
            <Link className="btn btn-succes mx-3" to="/Checkout">Finalizar compra</Link>
        </div>
    ) 
}

export default Cart;