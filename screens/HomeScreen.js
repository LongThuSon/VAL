import { SafeAreaView, StyleSheet, ScrollView } from "react-native"
import Header from "../components/home/Header"
import Stories from "../components/home/Stories"
import Post from '../components/home/Post'
import BottomTabs from "../components/sidebar/BottomTabs"
import { posts } from '../data'

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Stories />
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        post={post}
                    />
                ))}
            </ScrollView>
            <BottomTabs initialPage={'Home'} navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: '#fff',
    }
})

export default HomeScreen