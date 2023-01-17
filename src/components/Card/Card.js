
import './card.css'
import { useEffect, useState } from 'react';

const Card = () => {
    const [productos, setProductos] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + input)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setProductos(json.results)
            })
    }, [input])

    const handleOnSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setProductos(json.results)
            })
    }


    return (
        <>
            <div className='buscador'>
                <form onSubmit={handleOnSubmit}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='card__main'>
                <div className="card__items">
                    {productos.map(prod => {
                        return (
                            <div className="card__product" key={prod.id}>
                                <img className="card__img" src={prod.thumbnail} alt={prod.tilte} />
                                <h4 className="card__title">{prod.title}</h4>
                                <h3>${prod.price}</h3>
                                <button onClick={() => { }}>Ver detalle</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Card;