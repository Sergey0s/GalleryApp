import React from 'react';
import {View, Image, StyleSheet, Text} from "react-native"
import theme from "../../values/theme";

const Picture = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.pictureTitle}>
                Название
            </Text>
                <Image source={require('../../assets/splash.png')} style={styles.img}></Image>
            <Text style={styles.pictureAuthor}>
                Автор
            </Text>
        </View>);
};
const styles = StyleSheet.create({
    container: {
        height: theme.picture.height-14,
        width: theme.picture.width-12,
        margin: 4,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    img: {
        height: 100,
        width: 100,
    },
    pictureTitle: {
        padding: 5,
        fontSize: 13,
        fontWeight: '700',
    },
    pictureAuthor: {
        padding: 3,
        fontSize: 11,
        fontWeight: '500',
    }
});

export default Picture;