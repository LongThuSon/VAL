import { SafeAreaView } from "react-native-safe-area-context"
import EditArea from "../components/editProfile/EditArea"
import Header from '../components/editProfile/Header'

const EditProfile = () => {
    return (
        <SafeAreaView>
            <Header />
            <EditArea />
        </SafeAreaView>
    )
}

export default EditProfile