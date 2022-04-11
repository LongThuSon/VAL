import { View, Image, StyleSheet, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Info = ({ info }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.avatarContainer}>
                    <View>
                        <Image style={styles.avatar} source={{ uri: info.avatar }} />
                        <Pressable style={styles.addStory}>
                            <Text style={{ color: '#fff', fontSize: 20, marginTop: -4 }}>+</Text>
                        </Pressable>
                    </View>
                    <Text style={{ fontWeight: '700' }}>{info.name}</Text>
                </View>

                <View style={{ width: 250, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, }}>
                    <View style={styles.statisticalContainer}>
                        <Text style={{ fontWeight: '700', fontSize: 18 }}>{info.posts.length}</Text>
                        <Text>Bài viết</Text>
                    </View>
                    <View style={styles.statisticalContainer}>
                        <Text style={{ fontWeight: '700', fontSize: 18 }}>{info.followed.length}</Text>
                        <Text>Người theo dõi</Text>
                    </View>
                    <View style={styles.statisticalContainer}>
                        <Text style={{ fontWeight: '700', fontSize: 18 }}>{info.following.length}</Text>
                        <Text>Đang theo dõi</Text>
                    </View>
                </View>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => navigation.push('EditProfile')}
            >
                <Text style={styles.buttonText}>Chỉnh sửa trang cá nhân</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginBottom: 12,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatarContainer: {
        width: 90,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    addStory: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 67,
        left: 65,
        backgroundColor: 'blue',
        borderRadius: 50,
        alignItems: 'center',
    },
    statisticalContainer: {
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonText: {
        fontWeight: '700',
        color: '#000',
    },
})

export default Info