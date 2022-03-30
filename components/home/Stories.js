import { ScrollView, View, StyleSheet, Image, Text } from "react-native"

const stories = [
    {
        "name": "Cole",
        "avatar": "http://placeimg.com/640/480/food",
        "id": "1"
    },
    {
        "name": "Lebsack",
        "avatar": "http://placeimg.com/640/480/animals",
        "id": "2"
    },
    {
        "name": "Stokes",
        "avatar": "http://placeimg.com/640/480/nightlife",
        "id": "3"
    },
    {
        "name": "Waelchi",
        "avatar": "http://placeimg.com/640/480/cats",
        "id": "4"
    },
    {
        "name": "Macejkovic",
        "avatar": "http://placeimg.com/640/480/nightlife",
        "id": "5"
    },
    {
        "name": "Walter",
        "avatar": "http://placeimg.com/640/480/transport",
        "id": "6"
    },
    {
        "name": "Bruen",
        "avatar": "http://placeimg.com/640/480/fashion",
        "id": "7"
    },
    {
        "name": "Sporer",
        "avatar": "http://placeimg.com/640/480/fashion",
        "id": "8"
    },
    {
        "name": "Steuber",
        "avatar": "http://placeimg.com/640/480/business",
        "id": "9"
    },
    {
        "name": "Daniel",
        "avatar": "http://placeimg.com/640/480/transport",
        "id": "10"
    },
    {
        "name": "Jakubowski",
        "avatar": "http://placeimg.com/640/480/transport",
        "id": "11"
    },
    {
        "name": "Cruickshank",
        "avatar": "http://placeimg.com/640/480/transport",
        "id": "12"
    }
]

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {stories.map((story, index) => (
                    <View 
                        key={index}
                        style={styles.container}
                    >
                        <Image
                            style={styles.story}
                            source={{ uri: story.avatar }}
                        />
                        <Text>{story.name.length > 11
                            ? story.name.slice(0, 10).toLowerCase() + '...'
                            : story.name.toLowerCase()
                        }</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }, 
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    }
})

export default Stories