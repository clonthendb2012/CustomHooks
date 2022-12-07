import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [ formSatate, setFormSatate ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormSatate({
            ...formSatate,
            [ name ]: value
        });
    }
    
    const onResetForm = () => {        
        setFormSatate( initialForm );
    }

    return {
        ...formSatate,
        formSatate,
        onInputChange,
        onResetForm
    }

}
