import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderNotifi from '../components/header/HeaderNotifi';
import ListNotifi from '../components/notifi/ListNotifi';
import { info } from '../data';

const NotifiScreen = () => (
    <SafeAreaView style={styles.container}>
        <HeaderNotifi />
        <ListNotifi />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});


export default NotifiScreen;
