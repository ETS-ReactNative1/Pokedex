import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { Routes } from '@routes'
import Home from '@routes/Home'

const MainStack = createStackNavigator()

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name={Routes.Home}
                    component={Home}
                    options={{
                        headerShown: false
                    }} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}