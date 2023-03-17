import React from 'react'
import { View, FlatList } from 'react-native';
import { CatsResponse } from '../interfaces/theCatInterface';
import CatCard from './CatCard';

interface IProps {
    cats: CatsResponse[];
    stateFilter: CatsResponse[]
}

const VerticalSlider = ({ cats, stateFilter }: IProps) => {

    return (
        <View style={{height: 650, marginVertical: 15}}>
            <FlatList
                data={stateFilter.length > 0 ? stateFilter : cats}
                renderItem={({ item }: any) => <CatCard cats={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default VerticalSlider
