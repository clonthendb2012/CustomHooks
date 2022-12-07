import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [ counter, setCounter ] = useState(initialValue)

    const incrementar = ( value=1 ) => {
        setCounter( ( current ) => current + value );    
    }

    const decrementar = ( value=1 ) => {
        if ( counter === 0 ) return;
        setCounter( ( current ) => current - value );
    }

    const resetear = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        incrementar,
        decrementar,
        resetear
    }

}
