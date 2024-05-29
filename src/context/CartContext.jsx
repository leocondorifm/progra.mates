import {createContext, useState} from 'react'

const CartContext = createContext()



const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    console.log('cart.length => '+cart.length);
    const addToCart = (newProduct) => {
        
        const condition = isInCart(newProduct.id)
        if(condition){
            const productMod = cart.map((productCart)=>{
                if(productCart.id===newProduct.id){
                    return {...productCart, quantity: productCart.quantity + newProduct.quantity}
                }else{
                    return productCart
                }
            })
            setCart(productMod)
        }else{
            setCart([...cart, newProduct])
        }

    }

    const totalQuantity  = () => cart.reduce( (total,product) => total + product.quantity, 0 )

    const clearCart = () => setCart([])

    const isInCart = (productId) => {
        const condition = cart.some((product) => product.id === productId)
        return condition
    }

    const deleteProductById = (productId) => {
        const productFilter = cart.filter((productCart) => productCart.id !== productId )
        setCart(productFilter)
    }

    const totalPrice  = () => cart.reduce( (total,product) => total + (product.quantity * product.price), 0 )

    return(
        <CartContext.Provider value={ { cart, addToCart, totalQuantity, clearCart, deleteProductById, totalPrice } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }