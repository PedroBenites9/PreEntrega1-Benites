import React, { useState } from 'react'
import Card from '../Card/Card';
export const Input = () => {
    const [input, setInput] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                Card.setProductos(res.results)
            });

    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default Input;