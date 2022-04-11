import { useState } from 'react'
import { View, Pressable, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonicIcon from 'react-native-vector-icons/Ionicons'

const ListPost = ({ info }) => {
    const [selectIcon, setSelectIcon] = useState(true)
    const navigation = useNavigation()

    return (
        <View>
            <View style={styles.containerIcons}>
                <Pressable
                    style={[styles.containerIcon, selectIcon && styles.borderIcon]}
                    onPress={() => setSelectIcon(true)}
                >
                    <IonicIcon
                        name='image'
                        size={25}
                        color='#000'
                    />
                </Pressable>
                <Pressable
                    style={[styles.containerIcon, selectIcon && styles.borderIcon]}
                    onPress={() => setSelectIcon(false)}
                >
                    <IonicIcon
                        name='pricetag'
                        size={25}
                        color='#000'
                    />
                </Pressable>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -1 }}>
                {(selectIcon && ((!info.posts.length &&
                    <View style={{ width: '100%', height: 200, justifyContent: 'space-around', alignItems: 'center', marginTop: 60 }}>
                        <IonicIcon
                            name='image-outline'
                            size={80}
                            color='#000'
                        />
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>Chưa có bài viết</Text>
                    </View>) ||
                    info.posts.map((post, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => navigation.push('MyPosts')}
                        >
                            <Image
                                style={{ height: '100%', resizeMode: 'cover' }}
                                source={{ uri: post.images[0] }}
                            />
                            {info.posts.length > 1 &&
                                <IonicIcon
                                    name='albums'
                                    size={20}
                                    color='#fff'
                                    style={styles.notifiListImg}
                                />
                            }
                        </TouchableOpacity>
                    )))) ||
                    (!info.tagedPosts.length &&
                        <View style={{ width: '100%', height: 200, justifyContent: 'space-around', alignItems: 'center', marginTop: 60 }}>
                            <IonicIcon
                                name='image-outline'
                                size={80}
                                color='#000'
                            />
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Ảnh và video có mặt bạn</Text>
                            <Text style={{ color: '#808080' }}>Ảnh và video mà mọi người gắn thẻ bạn sẽ hiển thị tại đây</Text>
                        </View>) ||
                    info.tagedPosts.map((tagedPost, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => navigation.push('MyPosts')}
                        >
                            <Image
                                style={{ height: '100%', resizeMode: 'cover' }}
                                source={{ uri: tagedPost.images[0] }}
                            />
                            {info.posts.length > 1 &&
                                <IonicIcon
                                    name='albums'
                                    size={20}
                                    color='#fff'
                                    style={styles.notifiListImg}
                                />
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerIcons: {
        width: '100%',
        height: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerIcon: {
        width: '50%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderIcon: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    notifiListImg: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    item: {
        width: '33.3333%',
        height: 180,
        borderWidth: 1,
        borderColor: '#fff',
    }
})

export default ListPost