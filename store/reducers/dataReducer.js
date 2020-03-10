import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pictures: [],
    isLoaded: false
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PICTURES: {
            return {
                ...state,
                pictures: action.pictures,
                isLoaded: true
            }
        }
        default:
            return {...state}
    }
};

export default dataReducer;