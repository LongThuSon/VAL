import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/header/Header"
import Info from '../components/profile/Info'
import ListPost from '../components/profile/ListPost'
import { info } from '../data'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Info info={info} />
                <ListPost info={info} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default ProfileScreen