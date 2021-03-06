import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                style={styles.story}
                source={{ uri: post.avatar }}
            />
            <Text style={{ margin: 5, fontWeight: '700' }}>
                {post.name}
            </Text>
        </View>

        <EntypoIcon
            name='dots-three-horizontal'
            size={16}
            color='#000'
            onPress={() => navigation.push('NewPost')}
        />
    </View>
)

const PostImage = ({ post }) => {
    const [currentImg, setCurrentImg] = useState(1)
    const [enableQuantityImg, setEnableQuantityImg] = useState(true)
    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        const toggleQuantityImg = setInterval(() => {
            if (enableQuantityImg) setEnableQuantityImg(false)
        }, 5000)

        return () => clearInterval(toggleQuantityImg)
    }, [])

    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToInterval={windowWidth}
                onMomentumScrollEnd={e => {
                    setCurrentImg(Math.round(e.nativeEvent.contentOffset.x / windowWidth) + 1)
                    setEnableQuantityImg(true)
                }}>
                {post.images.map((image, index) => (
                    <View key={index} style={{ width: windowWidth, height: windowWidth }}>
                        <Image
                            style={{ height: '100%', resizeMode: 'contain' }}
                            source={{ uri: image }}
                        />
                    </View>
                ))}
            </ScrollView>

            {enableQuantityImg &&
                <View style={styles.quantityImg}>
                    <Text style={{ color: '#fff', fontSize: 12 }}>{currentImg}/{post?.images.length}</Text>
                </View>
            }
        </View>
    )
}

const PostFooter = ({ post }) => {
    const [liked, setLiked] = useState(false)
    const [save, setSave] = useState(false)
    const navigation = useNavigation()

    return (
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.leftFooterIconsContainer}>
                    <IonicIcon
                        name={liked ? 'heart' : 'heart-outline'}
                        size={25}
                        color={liked ? 'red' : '#000'}
                        onPress={() => setLiked(!liked)}
                    />
                    <IonicIcon
                        name='chatbox-outline'
                        size={25}
                        color='#000'
                        onPress={() => navigation.push('Comments')}
                    />
                    <IonicIcon
                        name='navigate-outline'
                        size={25}
                        color='#000'
                    />
                </View>

                <View>
                    <IonicIcon
                        name={save ? 'bookmark' : 'bookmark-outline'}
                        size={25}
                        color='#000'
                        onPress={() => setSave(!save)}
                    />
                </View>
            </View>

            <View style={{ marginTop: 4 }}>
                <Text style={{ fontWeight: '600' }}>
                    {post.likes} l?????t th??ch
                </Text>
            </View>

            <View style={{ marginTop: 5 }}>
                <Text>
                    <Text style={{ fontWeight: '700', marginLeft: 5 }}>{`${post.name} `}</Text>
                    {post.caption}
                </Text>

                {post.comments.length > 1 && (
                    <Text
                        style={{ color: 'gray' }}
                        onPress={() => navigation.push('Comments')}
                    >
                        {`Xem t???t c??? ${post.comments.length} b??nh lu???n`}
                    </Text>
                )}

                {post.comments.length > 1 &&
                    <Text>
                        <Text style={{ fontWeight: '700', marginLeft: 5 }}>{post.comments[post.comments.length - 1].name} </Text>
                        {post.comments[post.comments.length - 1].comment}
                    </Text>
                }
            </View>
        </View>
    )
}

const Post = forwardRef(({ post }, ref) => {
    const [height, setHeight] = useState(0);

    // console.log(height);

    useImperativeHandle(ref, () => ({
        returnHeight: () => height
    }));

    return (
        <View
            style={{ marginBottom: 20 }}
            onLayout={object => setHeight(object.nativeEvent.layout.height)}
        >
            <View style={styles.divider}></View>
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter post={post} />
        </View>
    )
})

const styles = StyleSheet.create({
    divider: {
        width: '90%',
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: '5%',
        marginBottom: 10,
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    quantityImg: {
        width: 32,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        position: 'absolute',
        top: 24,
        right: 24,
        borderRadius: 12
    },
    footerIcon: {
        width: 25,
        height: 25,
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
    },
    shareIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    }
})

export default Post