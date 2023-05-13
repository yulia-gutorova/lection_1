import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import ButtonScreen from "../screens/ButtonScreen";
import InputFieldScreen from "../screens/InputFieldScreen";
import ScrollViewScreen from "../screens/ScrollViewScreen";
import ModalScreen from "../screens/ModalScreen";
import FoodScreen from "../screens/FoodScreen";

export default function Navigation() {

    const Stack = createNativeStackNavigator();

    return(    
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen 
                        name="Home"
                        component={HomeScreen}/>

                    <Stack.Screen 
                        name="Buttons"
                        component={ButtonScreen}/>

                    <Stack.Screen 
                        name="Input"
                        component={InputFieldScreen}/>

                    <Stack.Screen 
                        name="Scroll"
                        component={ScrollViewScreen}/>

                    <Stack.Screen 
                        name="Modal"
                        component={ModalScreen}/>   

                    <Stack.Screen 
                        name="FoodScreen"
                        component={FoodScreen}/>       
                </Stack.Navigator>
            </NavigationContainer>
    )
}