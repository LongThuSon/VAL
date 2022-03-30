import { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            {(activeTab === icon.name &&
                <Image style={styles.icon} source={icon.active} />) ||
                <Image style={styles.icon} source={icon.inactive} />
            }
        </TouchableOpacity>
    )

    console.log(activeTab)

    return (
        <View>
            <View style={styles.divider}></View>
            <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
    },
    icon: {
        width: 30,
        height: 30,
    },
})

export default BottomTabs