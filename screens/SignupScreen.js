import { SafeAreaView, StyleSheet } from 'react-native'
import SignupForm from '../components/signup/SignupForm'

const SignupScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SignupForm />
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

export default SignupScreen