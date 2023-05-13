import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';

import {Text, 
        TextInput, 
        View,
        StyleSheet,
        Button,
        Image,
        ScrollView} from 'react-native';

export default function ScrollViewScreen() {

    const [text, setText] = useState('');
    const [wholeText, setWholeText] = useState([]);

    const showText = () => {
        if(text.trim().length != 0)
        {
            setWholeText([...wholeText, text.trim()])
        }
        setText("")
    }

    const item = wholeText.map((item, index) => {
        return (      
            <Text key = {item} style={styles.item}><AntDesign name="arrowright" size={16} color="black" />  {item}</Text>     
        );
    })

    return(
        <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Write here"
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    />
                    <Button title="Show text"
                            onPress={showText} 
                            color="#9370db"/>

                    <Text style={styles.text}>ScrollView:</Text>        
                </View>

                <View style={styles.scrollContainer}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: '#d8bfd8' }}>
                        <View>
                            {item}
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/owl-bottom.png')}
                        style={styles.image} />
                </View>

        </View>

    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#e6e6fa"
    },

    inputContainer: {
        width: "80%",
        paddingTop: 20,
        alignItems: 'center',
    },

    scrollContainer:{
        marginHorizontal: 20,
        marginTop: 50,
        height: 200,
        width: "90%", 
    },

    inputText: {
        height: 40, 
        width: "100%",
        borderStyle: 'dotted', 
        borderColor: 'gray', 
        borderWidth: 1,  
        marginBottom: 20, 
        backgroundColor: "white" 
    },

    item: {
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        fontSize: 15,
        padding: 5,
        marginTop: 5,
        backgroundColor: '#dda0dd',
        minWidth: "90%"
    },

    text:{
        fontSize: 20,
        marginTop: 20,
    },

    imageContainer: {
        marginTop: 30,
        width: "100%",
        height: 300
    },

    image:{
        width: "100%",
        height: 200, 
        resizeMode:"stretch",
        //resizeMode:"cover",
        //resizeMode:"contain",
        //resizeMode:"repeat",
        //resizeMode:"center",
    }
})