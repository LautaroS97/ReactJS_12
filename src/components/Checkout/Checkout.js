import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {

    const {cart, cartTotal, terminarCompra} = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })
    
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value    
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
        }

        if(values.nombre.length < 6) {
            alert("Email incorrecto")
            return
        }

        if(values.email.length < 6) {
            alert("Email incorrecto")
            return
        }

        if(values.direccion.length < 6) {
            alert("Email incorrecto")
            return
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) =>{
                terminarCompra(doc.id)
            })

    }

    if(cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h2>
                Checkout
            </h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    name="nombre"
                    type={'text'} 
                    placeholder="NOMBRE"
                    value={values.nombre}
                />
                <input
                    onChange={handleInputChange}
                    name="email"
                    type={'email'} 
                    placeholder="EMAIL"
                    value={values.email}
                />
                <input
                    onChange={handleInputChange}
                    name="direccion" 
                    type={'text'} 
                    placeholder="DIRECCIÓN"
                    value={values.direccion}
                />
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    )
}

export default Checkout;