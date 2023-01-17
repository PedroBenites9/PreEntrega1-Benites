const products = [
    {
        id: 1,
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.mylshop.com.ar/wp-content/uploads/2022/03/apple-iphone-12-128gb-verde.jpg',
        stock: 25,
        description: 'descripcion de Iphone 12'

    },
    {
        id: 2,
        name: 'Samsung s21',
        price: 800,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_722975-MLA49947876196_052022-O.jpg',
        stock: 25,
        description: 'descripcion de Samsung s21'

    },
    {
        id: 3,
        name: 'Ipad 8va generation',
        price: 1200,
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_730840-MLA44667980629_012021-O.jpg',
        stock: 25,
        description: 'descripcion de Ipad 8va'

    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })

}
export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}