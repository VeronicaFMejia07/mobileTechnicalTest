import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from '../styles/LoaderStyle';

const Loader = () => {
    return (
        <View style={styles.containerLoading}>
            <ActivityIndicator color='#FF8787' size={50} />
            <Text style={styles.loadingTitle}>Wait a moment...</Text>
        </View>
    )
}

export default Loader
