// Import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewPostScreen from './screens/NewPostScreen';
import CommentsScreen from './screens/CommentsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import MyPostsScreen from './screens/MyPostsScreen';
import SearchScreen from './screens/SearchScreen';
import NotifiScreen from './screens/NotifiScreen';

// Import icons
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const HomeStackScreen = () => (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={screenOptions}
    >
        <Stack.Screen
            name='Home'
            component={HomeScreen} />
    </Stack.Navigator>
);

const ProfileStackScreen = () => (
    <Stack.Navigator
        initialRouteName='Profile'
        screenOptions={screenOptions}
    >
        <Stack.Screen
            name='Profile'
            component={ProfileScreen} />
    </Stack.Navigator>
);

const SearchStackScreen = () => (
    <Stack.Navigator
        initialRouteName='Search'
        screenOptions={screenOptions}
    >
        <Stack.Screen
            name='Search'
            component={SearchScreen} />
    </Stack.Navigator>
);

const NotifiStackScreen = () => (
    <Stack.Navigator
        initialRouteName='Notifi'
        screenOptions={screenOptions}
    >
        <Stack.Screen
            name='Notifi'
            component={NotifiScreen} />
    </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

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
                let iconName;
                if (route.name === 'HomeStack') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'SearchStack') {
                    iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'NotifiStack') {
                    iconName = focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'ProfileStack') {
                    iconName = focused ? 'person' : 'person-outline';
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
        <Stack.Screen
            name='HomeStack'
            component={HomeStackScreen} />
        <Stack.Screen
            name='SearchStack'
            component={SearchStackScreen} />
        <Stack.Screen
            name='NotifiStack'
            component={NotifiStackScreen} />
        <Stack.Screen
            name='ProfileStack'
            component={ProfileStackScreen} />
    </Tab.Navigator>
);

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='BottomTab'
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name='Login'
                    component={LoginScreen} />
                <Stack.Screen
                    name='Signup'
                    component={SignupScreen} />
                <Stack.Screen
                    name='BottomTab'
                    component={BottomTab} />

                <Stack.Screen
                    name='NewPost'
                    component={NewPostScreen} />
                <Stack.Screen
                    name='Comments'
                    component={CommentsScreen} />
                <Stack.Screen
                    name='EditProfile'
                    component={EditProfileScreen} />
                <Stack.Screen
                    name='MyPosts'
                    component={MyPostsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default SignedInStack;