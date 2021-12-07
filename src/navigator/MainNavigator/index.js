import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Home, Pokemon } from '@routes'
import HomeScreen from '@routes/Home'
import PokemonScreen from '@routes/Pokemon'
import { Colors } from '@styles'

const MainStack = createSharedElementStackNavigator()

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <MainStack.Screen name={Home}
                    component={HomeScreen}
                    options={{
                        cardStyle: {
                            backgroundColor: Colors.white
                        }
                    }} />
                <MainStack.Screen name={Pokemon}
                    component={PokemonScreen}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

