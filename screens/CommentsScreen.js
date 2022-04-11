import { StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/comments/Header"
import Comment from "../components/comments/Comment"
import { posts } from '../data'
import WriteComment from '../components/comments/WriteComment'

const CommentsScreen = () => {
    const captionData = {
        name: posts[0].name,
        avatar: posts[0].avatar,
        comment: posts[0].caption,
        id: posts[0].id,
    }

    const renderItem = ({ item }) => {
        return <Comment comment={item} reply={true} />
    }
    
    const caption = () => {
        return <Comment comment={captionData} reply={false} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatList
                data={posts[0].comments}
                renderItem={renderItem}
                keyExtractor={(comment, index) => index}
                ListHeaderComponent={caption}
                showsVerticalScrollIndicator={false}
            />
            <WriteComment avatar={captionData.avatar} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default CommentsScreen