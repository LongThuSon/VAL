import { StyleSheet, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import NewPost from '../components/newPost/addPost'
import Header from '../components/newPost/Header'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <NewPost />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },  
})

export default NewPostScreen