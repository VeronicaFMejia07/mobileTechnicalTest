import React, { useEffect, useState } from 'react'
import theCatApi from '../api/theCatApi';
import { CatsResponse } from '../interfaces/theCatInterface';

interface CatsState {
    cats: CatsResponse[],
}

const useCats = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [catsState, setCatsState] = useState<CatsState>({
        cats: []
    });


    const getCats = async () => {
        const catsPromise = await theCatApi.get<CatsResponse[]>('/breeds');

        setCatsState({cats: catsPromise.data})
        setIsLoading(false)
    }
    useEffect(() => {
        getCats()
    }, [])

    return {
        isLoading,
        ...catsState
    }
}

export default useCats
