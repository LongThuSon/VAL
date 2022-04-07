import { SafeAreaView, StyleSheet } from 'react-native'
import LoginForm from '../components/login/LoginForm'

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <LoginForm navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
        marginHorizontal: 12,
    },
})

export default LoginScreen