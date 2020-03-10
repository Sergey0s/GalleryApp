import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setPictures = (pictures) => {
    return {
        type: actionTypes.GET_PICTURES,
        pictures: pictures
    }
};

export const getPictures = () => {
    let fetchedPics = [];
    return dispatch => {
        axios.get('https://api.unsplash.com/search/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&query=random')
            .then(response => {
                response.data.results.forEach((photo, index) => {
                    let url = photo.urls.regular;
                    let title = photo.description || 'Without title';
                    let author = photo.user.username;

                    let picture = {
                        id: index,
                        url,
                        title,
                        author
                    };
                    fetchedPics.push(picture)
                })
            }).then(() => {
            dispatch(setPictures(fetchedPics))
        })
    }
};