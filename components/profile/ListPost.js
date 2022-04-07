import { useState } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import ListImage from '../../assets/listImageIcon.png'
import TagedImage from '../../assets/tagedImageIcon.png'
import ImageIcon from '../../assets/imageIcon.png'
import NotifiListImg from '../../assets/notifiListImgIcon.png'

const ListPost = ({ info }) => {
    const [selectIcon, setSelectIcon] = useState(true)

    return (
        <View>
            <View style={styles.containerIcons}>
                <TouchableOpacity
                    style={[styles.containerIcon, selectIcon && styles.borderIcon]}
                    onPress={() => setSelectIcon(true)}
                >
                    <Image style={styles.selectIcon} source={ListImage} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.containerIcon, !selectIcon && styles.borderIcon]}
                    onPress={() => setSelectIcon(false)}
                >
                    <Image style={styles.selectIcon} source={TagedImage} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -1 }}>
                {(selectIcon && ((!info.posts.length &&
                    <View style={{ width: '100%', height: 200, justifyContent: 'space-around', alignItems: 'center', marginTop: 60 }}>
                        <Image style={{ width: 80, height: 80 }} source={ImageIcon} />
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>Chưa có bài viết</Text>
                    </View>) ||
                    info.posts.map((post, index) => (
                        <TouchableOpacity key={index} style={styles.item}>
                            <Image
                                style={{ height: '100%', resizeMode: 'cover' }}
                                source={{ uri: post.images[0] }}
                            />
                            <View style={styles.notifiListImg}> 
                                <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={NotifiListImg} />
                            </View>
                        </TouchableOpacity>
                    )))) ||
                    (!info.tagedPosts.length &&
                        <View style={{ width: '100%', height: 200, justifyContent: 'space-around', alignItems: 'center', marginTop: 60 }}>
                            <Image style={{ width: 80, height: 80 }} source={ImageIcon} />
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Ảnh và video có mặt bạn</Text>
                            <Text style={{ color: '#808080' }}>Ảnh và video mà mọi người gắn thẻ bạn sẽ hiển thị tại đây</Text>
                        </View>) ||
                    info.tagedPosts.map((tagedPost, index) => (
                        <TouchableOpacity key={index} style={styles.item}>
                            <Image
                                style={{ height: '100%', resizeMode: 'cover' }}
                                source={{ uri: tagedPost.images[0] }}
                            />
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
    selectIcon: {
        width: 25,
        height: 25,
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