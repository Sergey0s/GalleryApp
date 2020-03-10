import React from 'react';
import {Image, StyleSheet, View, ScrollView} from "react-native";
import * as dimen from '../../values/dimen';


const ImageScreen = (props) => {
    const showImage = props.navigation.state.params;
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <Image source={{uri: showImage.url}} style={styles.img}></Image>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        height: dimen.HEIGHT,
        width: dimen.WIDTH
    }
});

export default ImageScreen;