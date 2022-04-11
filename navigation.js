// Import navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Import screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ProfileScreen from './screens/ProfileScreen'
import NewPostScreen from './screens/NewPostScreen'
import CommentsScreen from './screens/CommentsScreen'
import EditProfileScreen from './screens/EditProfileScreen'
import MyPostsScreen from './screens/MyPostsScreen'

// Import icons
import IonicIcon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}

const HomeStackScreen = () => (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={screenOptions}
    >
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
)

const ProfileStackScreen = () => (
    <Stack.Navigator
        initialRouteName='Profile'
        screenOptions={screenOptions}
    >
        <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const BottomTab = () => (
    <Tab.Navigator
        initialRouteName='Login'
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { fontSize: 16 },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                if (route.name === 'HomeStack') {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === 'ProfileStack') {
                    iconName = focused ? 'person' : 'person-outline'
                }

                return (
                    <IonicIcon
                        name={iconName}
                        size={size}
                        color={color}
                    />
                )
            }
        })}

    >
        <Stack.Screen name='HomeStack' component={HomeStackScreen}
        />
        <Stack.Screen name='ProfileStack' component={ProfileStackScreen} />
    </Tab.Navigator>
)

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='BottomTab'
                screenOptions={screenOptions}
            >
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Signup' component={SignupScreen} />
                <Stack.Screen name='BottomTab' component={BottomTab} />

                <Stack.Screen name='NewPost' component={NewPostScreen} />
                <Stack.Screen name='Comments' component={CommentsScreen} />
                <Stack.Screen name='EditProfile' component={EditProfileScreen} />
                <Stack.Screen name='MyPosts' component={MyPostsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignedInStack