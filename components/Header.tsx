import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Title } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from "react-native-paper";


import ClassyMall from "../img/ClassyMall";

const Header = ({ navigation, mainScreen, viewType, setViewType, shopListScreen }) => {
    const navigateToShopList = () => {
        navigation.goBack();
    };



    return (
        <View
            style={{
                marginTop: getStatusBarHeight(),
                width: '100%',
                height: 70,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {!mainScreen &&
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        height: 40,
                        width: 56,
                        left:0,
                        paddingLeft: 16,
                        justifyContent: "center",
                    }}
                    onPress={navigateToShopList}
                >
                    <Ionicons
                        size={32}
                        name="ios-arrow-round-back"
                    />
                </TouchableOpacity>}
            {shopListScreen && <IconButton
                style={ss.addButton}
                icon={viewType == "cards" ? "list" : "view-carousel"}
                onPress={() => setViewType(viewType == "cards" ? "list" : "cards")}
                size={20}
                color="white"
            />}
            <Title>classy</Title>
            <ClassyMall />
            <Title>mall</Title>
        </View>
    )
}

const ss = StyleSheet.create({
    addButton: {
        backgroundColor: "#3cbc8d",
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        // top: 0,
        right: 0,
        shadowColor: "#000000",
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 6,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
})
export default Header

