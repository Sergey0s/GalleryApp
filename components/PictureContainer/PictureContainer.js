import React from 'react';
import {View, Image, StyleSheet, Text} from "react-native"
import theme from "../../values/theme";

const PictureContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.pictureTitle}>
               {props.title}
            </Text>
                <Image source={{uri: props.url}} style={styles.img}></Image>
            <Text style={styles.pictureAuthor}>
                by {props.author}
            </Text>
        </View>);
};
const styles = StyleSheet.create({
    container: {
        height: theme.picture.height-14,
        width: theme.picture.width-12,
        margin: 4,
        overflow: 'hidden',
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
        padding: 4,
        fontSize: 13,
        fontWeight: '700',
        height: 30,
        overflow: 'hidden',
        textAlign: 'center'
    },
    pictureAuthor: {
        padding: 8,
        fontSize: 11,
        fontWeight: '500',
    }
});

export default PictureContainer;