import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSearch from '../components/header/HeaderSearch';
import ListSearch from '../components/search/ListSearch';
import { info } from '../data';

const SearchScreen = () => (
    <SafeAreaView style={styles.container}>
        <HeaderSearch name={info.name} />
        <ListSearch />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});


export default SearchScreen;
