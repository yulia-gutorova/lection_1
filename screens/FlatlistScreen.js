import React from 'react';
import { useState } from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    Button,
    ImageBackground
} from 'react-native';
import Item from '../components/Item';

let LIST = [
    {

        title: 'First Item',
    },
    {

        title: 'Second Item',
    },
    {

        title: 'Third Item',
    },
    {

        title: 'Fourth Item',
    },
    {

        title: 'Fifth Item',
    },
    {

        title: 'Sixth Item',
    },
];

/* const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
); */

const FlatlistScreen = () => {

    const [newText, setNewText] = useState("");
    const [list, setList] = useState(LIST);

    const handlePress = () => {
        if (newText.trim().length !== 0) {
            setList([...list, { title: newText }]);
            setNewText("");
            console.log("Lägg till");
        }
    };

    console.log(list);

    return (

        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={newText}
                    onChangeText={(text) => setNewText(text)}
                />
                <Button
                    onPress={handlePress}
                    title={"Lägg till"}
                    style={styles.btn}
                    color="#daa520"
                />
            </View>

            <ImageBackground source={require('../assets/owl-flatlist.png')}
                    style={styles.flatlistContainer}>
                    <View style={{flex:1, alignItems: "center"}}>
                        <FlatList
                            style={styles.flatlist}
                            numColumns={2}
                            data={list}
                            renderItem={({ item }) => <Item title={item.title} />}
                        />
                    </View>

            </ImageBackground>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    inputContainer: {
        alignItems: "center",
    },

    flatlistContainer: {
        marginTop: 50,
        width: 420,
        height: 600,
        resizeMode: "cover",
        justifyContent: "center"
    },

    textInput: {
        borderWidth: 1,
        height: 50,
        width: 200,
        margin: 20,
        backgroundColor: "#556b2f",
        color: "white",
        paddingLeft: 10,
    },
    
    flatlist: {
        maxHeight: 500
    },

    btn: {
        width: 50,
        height: 20
    }, 

});

export default FlatlistScreen;