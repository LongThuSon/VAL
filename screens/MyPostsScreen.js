import { FlatList, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderMyPost from '../components/header/HeaderMyPost'
import Post from '../components/home/Post'
import { info } from '../data'

const MyPostScreen = () => {
    const renderItem = ({ item }) => {
        return <Post post={item} />
    }

    return (
        <SafeAreaView>
            <HeaderMyPost name={info.name} />
        </SafeAreaView>
    )
}

export default MyPostScreen