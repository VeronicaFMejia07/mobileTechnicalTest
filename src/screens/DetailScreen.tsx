import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigation';
import { Image } from 'react-native';
import { styles } from '../styles/DetailScreenStyle';
import CatDescription from '../components/CatDescription';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const DetailScreen = ({ route, navigation }: Props) => {
  const cat = route.params;
  const { name, image, description, origin, intelligence, adaptability, life_span, temperament, energy_level } = cat;
  const imageDefault = 'https://static.vecteezy.com/system/resources/previews/004/343/260/non_2x/cute-cat-or-kitty-cartoon-illustration-animal-seeking-wildlife-icon-design-concept-isolated-flat-face-style-free-vector.jpg'
  const urlImage = image?.url || imageDefault;

  //Personalizar el header de la navegación
  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerTitleStyle: {
        color: '#FF8787',
        fontWeight: 'bold',
        fontSize: 25,
      },
      headerTintColor: '#FF8787'
    });
  }, []);

  return (
    <View style={styles.containerDetail}>
      <View style={styles.containerImage}>
        <Image source={{ uri: urlImage }} style={styles.imageCat} />
      </View>

      <ScrollView>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>{description}</Text>
        </View>

        <CatDescription title='Country name: ' subtitle={origin} />
        <CatDescription title='Temperament: ' subtitle={temperament} />
        <CatDescription title='Intelligence: ' subtitle={intelligence} />
        <CatDescription title='Adaptability: ' subtitle={adaptability} />
        <CatDescription title='Energy level: ' subtitle={energy_level} />
        <CatDescription title='Life time: ' subtitle={life_span} />
      </ScrollView>
    </View>
  )
}

export default DetailScreen
