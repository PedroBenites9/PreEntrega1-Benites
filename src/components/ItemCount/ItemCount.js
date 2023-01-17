import { useState } from "react";
import '../ItemCount/itemCounter.css'

const ItemCount = ({ onAdd, stock, contar }) => {
    const [count, setCount] = useState(1); //inicializamos el hook counter con 1
    const decrement = () => {
        if (count === 1) {
            setCount(1);
        } else {
            setCount(prev => prev - 1); //retiramos la cantidad en 1
        }
    }
    const increment = () => {
        for (let i = 0; i < 1; i++) { //agregamos 1 en 1 
            setCount(prev => {
                if (prev >= stock) { // corroboramos que no se excedio del limite en stock
                    alert(`Se excedio de stock, solo se puede agregar una maximo de ${stock} productos`);
                    setCount(prev);
                } else {
                    return prev + 1;
                }
            });

        }
    }

    return (
        <div className="div__contenedor">
            <div className="div__contenedor-items">
                <h4>productos</h4>
                <div className="div__contador">
                    <button className="div__button" onClick={increment}>+1</button>
                    <h3>{count}</h3>
                    <button className="div__button" onClick={decrement}>-1</button>
                </div>
                <button className="div__button" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;

