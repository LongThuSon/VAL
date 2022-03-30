import { SafeAreaView, StyleSheet, ScrollView } from "react-native"
import Header from "../components/home/Header"
import Stories from "../components/home/Stories"
import Post from '../components/home/Post'
import BottomTabs from "../components/home/BottomTabs"
import Home from '../assets/homeIcon.png'
import Search from '../assets/searchIcon.png'
import Video from '../assets/videoIcon.png'
import Notifi from '../assets/heartIcon.png'
import Profile from '../assets/profileIcon.png'
import HomeActive from '../assets/homeActiveIcon.png'
import SearchActive from '../assets/searchActiveIcon.png'
import VideoActive from '../assets/videoActiveIcon.png'
import NotifiActive from '../assets/heartActiveIcon.png'
import ProfileActive from '../assets/profileActiveIcon.png'

const posts = [
    {
        "image": "http://placeimg.com/640/480/fashion",
        "name": "Breitenberg",
        "likes": 55,
        "caption": "Reiciendis fuga eligendi mollitia cumque et deserunt tempora error iure.",
        "avatar": "http://placeimg.com/640/480/food",
        "comments": [
            {
                "name": "long",
                "comment": "hihihi",
            },
            {
                "name": "linh",
                "comment": "hahaha",
            },
        ],
        "id": "1"
    },
    {
        "image": "http://placeimg.com/640/480/business",
        "name": "Padberg",
        "likes": 59,
        "caption": "Rerum et omnis pariatur praesentium.",
        "avatar": "http://placeimg.com/640/480/food",
        "comments": [],
        "id": "2"
    },
    {
        "image": "http://placeimg.com/640/480/nightlife",
        "name": "Dooley",
        "likes": 55,
        "caption": "Repudiandae ipsa suscipit quis velit praesentium.",
        "avatar": "http://placeimg.com/640/480/business",
        "comments": [],
        "id": "3"
    },
    {
        "image": "http://placeimg.com/640/480/nightlife",
        "name": "Durgan",
        "likes": 97,
        "caption": "Dolores vero est cum dolorum.",
        "avatar": "http://placeimg.com/640/480/fashion",
        "comments": [],
        "id": "4"
    },
    {
        "image": "http://placeimg.com/640/480/food",
        "name": "McClure",
        "likes": 32,
        "caption": "Fuga quis aliquam totam id fugit soluta aut ut architecto.",
        "avatar": "http://placeimg.com/640/480/animals",
        "comments": [],
        "id": "5"
    }
]

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

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
            <Stories />
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        post={post}
                    />
                ))}
            </ScrollView>
            <BottomTabs icons={icons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    }
})

export default HomeScreen