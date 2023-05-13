import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    Image,
    ImageBackground,
    TouchableHighlight,
} from "react-native";

import { Hoverable, Pressable, } from 'react-native-web-hover'
import { useState } from "react";

const Separator = () => <View style={styles.separator} />;

const HomeScreen = ({ navigation }) => {

    const [loadFonts, setLoadFonts] = useState(true);

   /*  console.log(loadFonts);

    async function fonts() {
        try{
            await Font.loadAsync({
                "PoppinsBold": require("../assets/fonts/Poppins-Bold.ttf"),
                "RalewayItalic": require("../assets/fonts/Raleway-Italic.ttf"),
              });
        }
        catch(e){
            console.warn(e);
        }
        finally{
            setLoadFonts(true);
            console.log(loadFonts)
        }
      }

    fonts();  */

    if(loadFonts) {
        return (
            <View style={styles.container}>
    
                <View style={styles.miniContainer}>
                    <Text style={styles.text}>HomeScreen</Text>
                </View>
    
                <View>
                    <ImageBackground
                        source={require('../assets/owl.png')}
                        style={styles.image} />
                </View>
    
    
    
                <View style={styles.container}>
    
                    <LinearGradient
                        colors={['#006400', 'green', '#daa520']}
                        style={styles.gradientContainer}>
    
                        <View>
                        <TouchableHighlight
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Buttons")}>
                            <Text style={styles.btnText}>GO TO BUTTONS</Text>
                        </TouchableHighlight>
    
                        <Separator />
    
                        <TouchableHighlight
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Input")}>
                            <Text style={styles.btnText}>GO TO FLATLIST</Text>
                        </TouchableHighlight>
    
                        <Separator />
    
                        <TouchableHighlight
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Scroll")}>
                            <Text style={styles.btnText}>GO TO SCROLLVIEW</Text>
                        </TouchableHighlight>
    
                        <Separator />
    
                        <TouchableHighlight
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Modal")}>
                            <Text style={styles.btnText}>GO TO MODAL</Text>
                        </TouchableHighlight>
    
                        <Separator />
    
                        <TouchableHighlight
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("FoodScreen")}>
                            <Text style={styles.btnText}>GO TO HUNGRY OWL</Text>
                        </TouchableHighlight>
                        </View>
                        
                    </LinearGradient>
                </View>
    
    
            </View>
        )
      }
}

export default HomeScreen

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    text: {
        marginTop: 30,
        fontSize: 20,
        fontFamily: "PoppinsBold",  
    },

    btnText: {
        fontFamily: "RalewayItalic",
        textAlign: 'center',
        color: "white",
        fontSize: 14,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    gradientContainer:{
        flex: 1,
        width: 420,
        alignItems: 'center',
        justifyContent: 'center',
    },

    miniContainer: {
        flex: 0.2,
        width: "100%",
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        fontFamily: "Raleway-Italic",
    },

    buttonsContainer: {
        width: "100%",
        backgroundColor: '#a9a9a9',
    },

    image: {
        width: 415,
        height: 200,
    },

    separator: {
        marginVertical: 8,
    },

    btnPressMe: {
        textAlign: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#006400',
        minWidth: 200,
        maxWidth: 200,
    },

})