import product from '../../assets/images/producto_1.jpg';

const ProductCard = () => {
    return (
            <div className='shadow-xl w-60 sm:m-4 rounded-md grid grid-cols-1 divide-y-2 divide-tan justify-self-center transition hover:scale-110'>
                <div>
                    <img className='p-6' src={product}/>
                    <h2 className='px-6 -py-1 text-xl italic text-green-light'>Producto 1</h2>
                </div>
                <div className='px-6 py-1'>
                    <h2 className='text-xl text-green-light font-bold'>$3,463</h2>
                    <h2 className='text-base text-green-light'>5 Dias</h2>
                </div>
            </div>
        
    )
}

export default ProductCard