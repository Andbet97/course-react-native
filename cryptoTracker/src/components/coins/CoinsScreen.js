import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CoinsScreen = (props) => {

    const handlePress = () => {
        console.log("go to detail", props);
        props.navigation.navigate('CoinDetail');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Screen Coins
            </Text>
            <Pressable
                onPress={handlePress}
                style={styles.btn}
            >
                <Text style={styles.btnText}>
                    Ir a Detail
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    titleText: {
        color: "#fff",
        textAlign: "center"
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    }
});

export default CoinsScreen;
