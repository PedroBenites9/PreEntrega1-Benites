import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from "../../asyncMocks"
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])


    if (loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='ItemListContainer' onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer