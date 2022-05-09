import { useState, createRef, useRef } from 'react'
import { FlatList, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderMyPost from '../components/header/HeaderMyPost'
import Post from '../components/home/Post'
import { info } from '../data'

const MyPostScreen = () => {
    const [heights, setHeights] = useState([]);
    const postRef = useRef();

    console.log(postRef.current?.returnHeight());
 
    const showTextInChild = () => {
        const txt = postRef.current?.returnHeight();
        alert(txt);
    };

    const renderItem = (item) => {

        return <Post post={item.item} ref={postRef} />
    }

    const getItemLayout = (data, index) => {
        const length = heights[index];
        const offset = heights.slice(0, index).reduce((a, c) => a + c, 0)
        return { length, offset, index }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={() => showTextInChild()} title='show' />
            <HeaderMyPost name={info.name} />
            <FlatList
                data={info.posts}
                renderItem={renderItem}
                keyExtractor={post => post.id}
                showsVerticalScrollIndicator={false}
                // getItemLayout={(data, index) => (
                //     {length: windowWidth, offset: windowWidth * index, index}
                //   )}
                // getItemLayout={getItemLayout}
                initialScrollIndex={3}
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

export default MyPostScreen