import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonicIcon from 'react-native-vector-icons/Ionicons'

const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <IonicIcon 
                name='chevron-back'
                size={25}
                color='#000'
                onPress={() => navigation.goBack()}
            />

            <Text style={{ fontSize: 18, fontWeight: '700' }}>Chỉnh sửa trang cá nhân</Text>
            
            <Text style={{ fontWeight: '700', color: 'blue' }}>Xong</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginTop: 10,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})

export default Header