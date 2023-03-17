import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/NotFoundStyle';

interface IProps{
    title: string,
    iconName: string
}
const notFound = ({title, iconName}:IProps) => {
  return (
    <View style={styles.containerNotFound}>
        <Icon name={iconName} size={50} color='#FF9494'/>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default notFound
