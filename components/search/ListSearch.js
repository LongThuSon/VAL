import React, { useState } from 'react';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const ListSearch = () => {
    const [selectItem, setSelectItem] = useState(0);
    const [text, setText] = React.useState("");

    return (
        <View>
            <View style={styles.containerIcons}>
                <Pressable
                    style={[styles.containerIcon, selectItem === 0 && styles.borderIcon]}
                    onPress={() => setSelectItem(0)}
                >
                    <Text style={{ fontWeight: selectItem === 0 ? '700' : '400' }}>Mọi người</Text>
                </Pressable>
                <Pressable
                    style={[styles.containerIcon, selectItem === 1 && styles.borderIcon]}
                    onPress={() => setSelectItem(1)}
                >
                    <Text style={{ fontWeight: selectItem === 1 ? '700' : '400' }}>Người theo dõi</Text>
                </Pressable>
                <Pressable
                    style={[styles.containerIcon, selectItem === 2 && styles.borderIcon]}
                    onPress={() => setSelectItem(2)}
                >
                    <Text style={{ fontWeight: selectItem === 2 ? '700' : '400' }}>Đang theo dõi</Text>
                </Pressable>
            </View>

            <View style={{ marginHorizontal: 12, }}>
                <View style={{ marginBottom: 12, }}>
                    <TextInput
                        placeholder="Search"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.inputSearch}
                        underlineColor='#ffffff'
                        activeUnderlineColor='#ffffff'
                        left={<TextInput.Icon name="account-search" />}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            style={styles.story}
                            source={{ uri: "http://placeimg.com/640/480/food" }}
                        />
                        <Text style={{ margin: 12, fontWeight: '700' }}>
                            long nguyen
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 108, justifyContent: 'space-between' }}>
                        <Pressable
                            style={styles.button}

                        >
                            <Text style={styles.buttonText}>Theo dõi</Text>
                        </Pressable>
                        <EntypoIcon
                            name='dots-three-horizontal'
                            size={20}
                            color='#000'
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            style={styles.story}
                            source={{ uri: "http://placeimg.com/640/480/food" }}
                        />
                        <Text style={{ margin: 12, fontWeight: '700' }}>
                            long nguyen
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 108, justifyContent: 'space-between' }}>
                        <Pressable
                            style={styles.button}

                        >
                            <Text style={styles.buttonText}>Theo dõi</Text>
                        </Pressable>
                        <EntypoIcon
                            name='dots-three-horizontal'
                            size={20}
                            color='#000'
                        />
                    </View>
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    containerIcons: {
        width: '100%',
        height: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    containerIcon: {
        width: '33%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderIcon: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 8,
        backgroundColor: 'blue',
    },
    buttonText: {
        fontWeight: '700',
        color: '#ffffff',
    },
    inputSearch: {
        height: 42,
    }
})

export default ListSearch;