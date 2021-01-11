import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./src/Header";
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import Home from "./src/Home";

export default function App() {
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        //  View são como as divs do HTML
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Header/>
            <Home/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
