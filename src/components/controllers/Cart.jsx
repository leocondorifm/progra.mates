import { useState } from 'react';
import Shop from '../action/shop';

const Cart = () => {
    const [i,seti] = useState(0)
    const [f,setf] = useState(0)

    const sum = () => { 
        seti(i+1) 
    }

    const reset = () =>{
        seti(0)
    }

    const fav = () => {
        setf(f+1)
    }

  return (
    <Shop i={i} f={f} sum={sum} reset={reset} fav={fav}/>
  )
}

export default Cart