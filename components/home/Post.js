import { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import HeartIcon from '../../assets/heartIcon.png'
import HeartActiveIcon from '../../assets/heartActiveIcon.png'
import CommentIcon from '../../assets/commentIcon.png'
import SendIcon from '../../assets/sendIcon.png'
import ImportantIcon from '../../assets/importantIcon.png'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <View style={styles.divider}></View>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Like post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

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

        <Text style={{ fontWeight: '900' }}>...</Text>
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
                    <Text style={{ color: '#fff', fontSize: 12 }}>{currentImg}/{post.images.length}</Text>
                </View>
            }
        </View>
    )
}

const PostFooter = () => {
    const [liked, setLiked] = useState(false)

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.leftFooterIconsContainer}>
                {(!liked && <Icon imgStyle={styles.footerIcon} imgUrl={HeartIcon} handleEvent={() => setLiked(true)} />) ||
                    <Icon imgStyle={styles.footerIcon} imgUrl={HeartActiveIcon} handleEvent={() => setLiked(false)} />}

                <Icon imgStyle={styles.footerIcon} imgUrl={CommentIcon} />
                <Icon imgStyle={[styles.footerIcon, styles.shareIcon]} imgUrl={SendIcon} />
            </View>

            <View>
                <Icon imgStyle={styles.footerIcon} imgUrl={ImportantIcon} />
            </View>
        </View>
    )
}

const Icon = ({ imgStyle, imgUrl, handleEvent }) => (
    <TouchableOpacity onPress={handleEvent}>
        <Image
            style={imgStyle}
            source={imgUrl}
        />
    </TouchableOpacity>
)

const Like = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ fontWeight: '600' }}>
            {post.likes} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text>
            <Text style={{ fontWeight: '700', marginLeft: 5 }}>{`${post.name} `}</Text>
            {post.caption}
        </Text>
    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                {`View${post.comments.length > 1 ? ' all' : ''} ${post.comments.length} ${post.comments.length > 1 ? 'comments' : 'comment'}`}
            </Text>
        )}
    </View>
)

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>
                    <Text style={{ fontWeight: '700', marginLeft: 5 }}>{comment.name} </Text>
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

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