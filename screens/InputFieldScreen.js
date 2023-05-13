import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import PressableComponemnt from '../components/Buttons';

import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    FlatList,
    ScrollView,
    Image,
    ImageBackground
} from 'react-native';

export default function InputFieldScreen() {

    const [text, setText] = useState('');
    const [wholeText, setWholeText] = useState([]);

    const showText = () => {
        if (text.trim().length != 0) {
            setWholeText([...wholeText, text.trim()])
        }
        setText("")
    }

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Write here"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />

                <PressableComponemnt
                                onPress={showText}
                                title={"ADD TO LIST"}
                                style={{ backgroundColor: "#d2691e" }}
                            />

                {/* <ScrollView style={styles.scrollview} horizomtal> */}

                <Text style={styles.text}>FlatList:</Text>

                <ImageBackground style={styles.image}
                                source={require('../assets/owl-flat.png')}>

                    <FlatList   data={wholeText}
                                style={styles.list}
                                showsVerticalScrollIndicator={true}
                                renderItem={({ item }) => 
                                    <Text style={styles.items}>
                                        <EvilIcons name="star" size={16} color="black" /> {item}
                                    </Text>}>
                    </FlatList>
                </ImageBackground>


                {/*                 <Image source={require('../assets/owl-bottom.png')}
                       style={styles.image}/> */}
            </View>

        </>
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: "#ffebcd"
    },

    flatListContainer: {
        flex: 4,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },

    inputText: {
        height: 40,
        width: "90%",
        borderStyle: 'dotted',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        backgroundColor: "white"
    },

    list: {

        borderColor: "gray",
        borderWidth: 1,
        marginTop: 0,
        marginLeft: 0,
        backgroundColor: '#ffebcd',
        maxHeight: "100%",
        width: "100%",
        opacity: 0.6
    },

    items: {
        marginLeft: 14,
        color: "black",
        fontWeight: "bold"
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        
    },
    image: {
        width: 420,
        height: 200
    },
     image:{
        width: 420,
        height: 500,
        alignItems: 'center',
     }
})