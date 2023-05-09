import React, { useState } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    FlatList,
    ScrollView,
    Image
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
                <Button title="Show text"
                        color= "#d2691e"
                        onPress={showText} />

            {/* </View> */}

            {/* <ScrollView style={styles.scrollview} horizomtal> */}
            {/* <View style={styles.flatListContainer}> */}

                <Text style={styles.text}>FlatList:</Text>

                <FlatList data={wholeText}
                    style={styles.list}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) => <Text style={styles.items}>{item}</Text>}>
                </FlatList>

{/*                 <Image source={require('../assets/owl-bottom.png')}
                       style={styles.image}/> */}
            </View>

            </>
    )
}

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
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 30,
        marginLeft: 10,
        backgroundColor: '#ffebcd',
        maxHeight: 400,
        width: 200,
    },

    items: {
        marginLeft: 10
    },
    text: {
        fontSize: 20,
        marginTop: 20,
    },
    image:{
        width: 420,
        height: 200
    }
})