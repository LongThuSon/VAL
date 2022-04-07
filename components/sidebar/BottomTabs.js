import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import Home from '../../assets/homeIcon.png'
import Search from '../../assets/searchIcon.png'
import Video from '../../assets/videoIcon.png'
import Notifi from '../../assets/heartIcon.png'
import Profile from '../../assets/profileIcon.png'
import HomeActive from '../../assets/homeActiveIcon.png'
import SearchActive from '../../assets/searchActiveIcon.png'
import VideoActive from '../../assets/videoActiveIcon.png'
import NotifiActive from '../../assets/heartActiveIcon.png'
import ProfileActive from '../../assets/profileActiveIcon.png'

const icons = [
    {
        name: 'Home',
        inactive: Home,
        active: HomeActive,
    },
    {
        name: 'Search',
        inactive: Search,
        active: SearchActive,
    },
    {
        name: 'Video',
        inactive: Video,
        active: VideoActive,
    },
    {
        name: 'Notifi',
        inactive: Notifi,
        active: NotifiActive,
    },
    {
        name: 'Profile',
        inactive: Profile,
        active: ProfileActive,
    },
]

const BottomTabs = ({ initialPage, navigation }) => {
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate(icon.name)
        }}>
            {(initialPage === icon.name &&
                <Image style={styles.icon} source={icon.active} />) ||
                <Image style={styles.icon} source={icon.inactive} />
            }
        </TouchableOpacity>
    )

    return (
        <View>
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    icon: {
        width: 30,
        height: 30,
    },
})

export default BottomTabs