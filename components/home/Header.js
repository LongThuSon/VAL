import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import ChatImage from '../../assets/sendIcon.png'
import AddNew from '../../assets/addNewIcon.png'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>VAL</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between' }}>
                <Icon imgStyle={styles.icon} imgUrl={AddNew} />
                <Icon imgStyle={[ styles.icon, styles.chatIcon ]} imgUrl={ChatImage} />
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

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,

    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    chatIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    }
})

export default Header