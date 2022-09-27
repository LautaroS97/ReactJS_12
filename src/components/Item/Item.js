import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <div className="container-card">
            <div className="card-list">
                <div className="card">
                    <img className="imagen-producto" src={producto.img}/>
                    <h3 className="nombre-producto">{producto.nombre}</h3>
                    <h4 className="info-desc">Descripción: {producto.desc}</h4>
                    <div>
                        <h2 className="info-precio">Precio: AR$ {producto.precio}</h2>
                    </div>
                        {
                            producto.stock>0
                            ? <div className="ver-mas">
                                <Link to={`/item/${producto.id}`} className="ver-mas-button">Ver detalles...</Link>
                              </div>
                            : <h3 className='nohaystock'>PRODUCTO NO DISPONIBLE</h3>
                        }
                </div>
            </div>
        </div>
    )
}

export default Item;