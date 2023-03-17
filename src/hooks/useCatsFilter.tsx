import React, { useEffect, useRef, useState } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { CatsResponse } from '../interfaces/theCatInterface';
import useCats from './useCats';

const useCatsFilter = () => {

    const { cats } = useCats();
    const [stateFilter, setStateFilter] = useState<CatsResponse[]>([]);
    const [stateInput, setStateInput] = useState('');
    const [isMatch, setIsMatch] = useState(true);
    const firstRender = useRef(false);

    const filterCats = () => {
        setStateFilter([]) //limpia el estado

        cats.filter(cat => { //filtra e itera dentro del array de cats
            //evalua si el cat name incluye el valor introducido en el input
            if (cat.name.toUpperCase().includes(stateInput.toUpperCase())) { //convierte el nombre del gato y el valor del input en mayusculas
                setStateFilter(state => [...state, cat]) //Llena el state, con el estado actual y le añade el gato filtrado
                setIsMatch(true) //si hubo coincidencia 
            }
        })
        setStateInput('')
    }

    useEffect(() => {
        if (firstRender.current) { //si el valor de la referencia es true
            if (stateFilter.length === 0) {
                setIsMatch(false);
                return;
            }
            setIsMatch(true);
        } else {
            firstRender.current = true; //pasa el valor de la referencia a true
            SplashScreen.hide(); //ocultar el splash una vez cargue la app
        }
    }, [stateFilter]);

    return {
        isMatch,
        stateInput, 
        setStateInput,
        filterCats, 
        stateFilter
    }
}

export default useCatsFilter
