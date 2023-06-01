import React from 'react'

import ColeccionItems from './components/coleccionItems'
import ListOfProducts from './components/listOfProducts'

const ProductsPage = () => {
    const categoria = {
        titulo: "Colecciones",
        items: [
            "Todos",
            "Categoria 1",
            "Categoria 2",
            "Categoria 3",
            "Categoria 4",
            "Categoria 5",
        ]
    }
    const orden = {
        titulo: "Ordenar por:",
        items: [
            "Relevancia",
            "Ordenar 1",
            "Ordenar 2",
            "Ordenar 3",
            "Ordenar 4",
            "Ordenar 5",
        ]
    }

    return (
        <div className=' flex flex-row p-10 gap-10'>

            <ColeccionItems props={categoria} />

            <div className='grid grid-flow-row w-full gap-4 p-2 grid-cols-2 lg:grid-cols-3   m-0'>
               <ListOfProducts />
            </div>

            <ColeccionItems props={orden} />

        </div>
    )
}

export default ProductsPage