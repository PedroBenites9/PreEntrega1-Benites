import './ItemListContainer.css'

const ItemListContainer = ({ greeting, bootstrap }) => {
    return (
        <div className={`Greeting ${bootstrap}`}>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer