import { StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/header/Header"
import Stories from "../components/home/Stories"
import Post from '../components/home/Post'
import { posts } from '../data'

const HomeScreen = () => {
    const renderItem = ({ item }) => {
        return <Post post={item} />
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={post => post.id}
                ListHeaderComponent={Stories}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default HomeScreen