import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ProfileScreen from './screens/ProfileScreen'

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Profile'
                screenOptions={screenOptions}
            >
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Signup' component={SignupScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignedInStack