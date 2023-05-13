import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Pressable,
    Image,
    ImageBackground,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;


export default function ButtonScreen() {
    const [background, setBackground] = useState('violet');
    const [text, setText] = useState('');

    const helloWorld = () => {
        console.log("Hello ");
        setBackground('gray');
    }

    const helloWorld2 = () => {
        console.log("World");
        setBackground('violet');
    }

    return (

        <ImageBackground source={require('../assets/owl-back.png')} style={styles.container}>


                    <TouchableHighlight
                        style={styles.btnPressMe}
                        onPress={helloWorld}
                        onPressOut={helloWorld2}>
                        <Text style={styles.text}>
                            TouchableHighlight
                        </Text>
                    </TouchableHighlight>

                    <Separator />

                    <TouchableOpacity style={styles.btnPressMe} onPress={helloWorld}>
                        <Text style={styles.text}>TouchableOpacity</Text>
                    </TouchableOpacity >

                    <Separator />

                    <Pressable style={[styles.btnPressMe, {backgroundColor: background}]} 
                                onPressIn={() => setBackground('gray')}
                                onPress={helloWorld}
                                onPressOut={helloWorld2}>
                                    {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
                        {/* <Text style={styles.text}>Pressable</Text> */}
                    </Pressable>

                    <Separator />

                    <Button
                        title="Alert"
                        color="gray"
                        onPress={() => Alert.alert('Hello World')}
                    />

                    <Separator />

                    <     Button
                        title="Disabled"
                        color="lightgreen"
                        disabled
                    />


             </ImageBackground >
            


    )
}
//-------------- Styles-----------------------------

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        width: null,
        height: null,
    },

    btnPressMe: {
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'violet',
        minWidth: 100, 
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    separator: {
        marginVertical: 8,
    },


});