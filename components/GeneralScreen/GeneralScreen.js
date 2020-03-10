import React, {useEffect, Component, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView, Text} from "react-native";
import PictureContainer from '../PictureContainer/PictureContainer';
import theme from "../../values/theme";
import * as dimen from '../../values/dimen';
import ScreenNames from "../../navigation/ScreenNames";
import {connect} from 'react-redux';
import * as actions from "../../store/actions/dataActions";

const generalScreen = (props) => {

    useEffect(() => {
        props.onGetPictures()
    }, []);

    const sendNoteToEditor = (index) => {
        props.navigation.push(ScreenNames.image, {
            index: index,
            ...props.pictures[index],
        });
    };

    let content = '';
    if (!props.isLoaded) {
        content =
            <View style={styles.loadingScreen}>
                <Text style={{fontSize: 40}}> Loading... </Text>
            </View>
    } else {
        content =
            (<ScrollView>
                <View style={styles.container}>
                    {props.pictures.map((picture, index) => {
                        return <TouchableOpacity
                            onPress={() => {
                                sendNoteToEditor(index);
                            }}
                        >
                            <PictureContainer
                                id={picture.id}
                                url={picture.url}
                                title={picture.title}
                                author={picture.author}
                            />
                        </TouchableOpacity>
                    })}
                </View>
            </ScrollView>);
    }

    return (
        <View>
            {content}
        </View>);
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: theme.generalScreen.paddingTop,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingScreen: {
        height: dimen.HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.generalScreen.paddingTop,
    }
});


const mapStateToProps = state => {
    return {
        pictures: state.data.pictures,
        isLoaded: state.data.isLoaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetPictures: () => dispatch(actions.getPictures()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(generalScreen);
