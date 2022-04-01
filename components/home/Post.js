import { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
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
    return (
        <View style={{ width: '100%', height: 450 }}>
            <Image
                style={{ height: '100%', resizeMode: 'cover' }}
                source={{ uri: post.image }}
            />
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
        width: '80%',
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: '10%',
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