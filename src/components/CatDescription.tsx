import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../styles/CatDescriptionStyle';

interface IProps {
    title: string,
    subtitle: string | number
}
const CatDescription = ({ title, subtitle }: IProps) => {
    return (
        <View style={styles.containerProperties}>
            <Text style={styles.title}
            >
                {title}  
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </Text>
        </View>
    )
}

export default CatDescription
