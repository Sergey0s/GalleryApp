import { createStackNavigator } from 'react-navigation-stack';
import ScreenNames from "./ScreenNames";
import GeneralScreen from '../components/GeneralScreen/GeneralScreen';
import ImageScreen from '../components/ImageScreen/ImageScreen';

export default createStackNavigator ({
    [ScreenNames.general] : {
        screen: GeneralScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    [ScreenNames.image]: {
        screen: ImageScreen,
        navigationOptions: {
            headerShown: false
        }
    }
});