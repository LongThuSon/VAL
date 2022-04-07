import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottomTabs from "../components/sidebar/BottomTabs"
import Header from '../components/profile/Header'
import Info from '../components/profile/Info'
import ListPost from '../components/profile/ListPost'
import { info } from '../data'

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Info info={info} />
                <ListPost info={info} />
            </ScrollView>
            <BottomTabs initialPage={'Profile'} navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: '#fff',
    }
})

export default ProfileScreen