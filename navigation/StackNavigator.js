import { createStackNavigator } from 'react-navigation-stack';
import ScreenNames from "./ScreenNames";
import GeneralScreen from '../components/GeneralScreen/GeneralScreen';
import ImageScreen from '../components/ImageScreen/ImageScreen';

export default createStackNavigator ({
    [ScreenNames.general] : {
        screen: GeneralScreen,
        navigationOptions: {
            header: null
        }
    },
    [ScreenNames.image]: {
        screen: ImageScreen,
        navigationOptions: {
            header: null
        }
    }
});