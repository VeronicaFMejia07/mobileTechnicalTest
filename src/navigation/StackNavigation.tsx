import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { CatsResponse } from '../interfaces/theCatInterface';

export type RootStackParams = {
    HomeScreen: undefined,
    DetailScreen: CatsResponse,
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                options={
                    {
                        title: 'World of cats',
                        headerTitleStyle: { 
                            color: '#FF8787', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            marginHorizontal: 110 
                        },
                        cardStyle: { backgroundColor: 'white' }
                    }}
                component={HomeScreen}
            />
            <Stack.Screen name="DetailScreen" options={{ title: 'Race', cardStyle: { backgroundColor: 'white' }} } component={DetailScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
