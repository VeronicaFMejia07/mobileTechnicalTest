import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/CatSearchStyle';

interface IProps {
  valueInput: string | undefined,
  onChangeInput: React.Dispatch<React.SetStateAction<string>>,
  placeholder?: string,
  action: () => void,
}

const CatSearch = ({ valueInput, onChangeInput, placeholder, action }: IProps) => {
  return (
    <View style={styles.containerSearch}>
      <TextInput style={styles.inputSearch} value={valueInput} onChangeText={onChangeInput} placeholder={placeholder} />
      <TouchableOpacity style={styles.buttonSearch} onPress={action}>
        <Icon name='search' size={30} color={'#FF9494'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default CatSearch
