import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../styles/CatCardStyle';
import { CatsResponse } from '../interfaces/theCatInterface';
interface IProps {
    cats: CatsResponse;
}

const CatCard = ({cats}:IProps) => {
    const navigation = useNavigation();
    const { name, origin, intelligence, image } = cats;
    const imageDefault = 'https://static.vecteezy.com/system/resources/previews/004/343/260/non_2x/cute-cat-or-kitty-cartoon-illustration-animal-seeking-wildlife-icon-design-concept-isolated-flat-face-style-free-vector.jpg'
    const urlImage = image?.url || imageDefault;

    return (
        <View style={styles.containerCard}>
            <View style={styles.containerRowOne}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity 
                    onPress={() => navigation.dispatch(
                        CommonActions.navigate({ name: 'DetailScreen', params: cats}))
                    }
                    style={styles.buttonMore}
                >
                    <Text style={styles.seeMore}>More...</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerImage}>
                <Image 
                    source={{uri: urlImage}} 
                    style={styles.image}
                />
            </View>

            <View style={styles.containerRowTwo}>
                <Text style={styles.country}>{origin}</Text>
                <Text style={styles.intelligence}> Intelligence: {intelligence}</Text>
            </View>
        </View>
    )
}

export default CatCard
