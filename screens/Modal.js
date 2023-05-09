import React, { useState } from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal, ImageBackground} from 'react-native'; 


export default  function ModalScreen () {

    const [visibility, setVisibility] = useState(false);

    return (
         
        <ImageBackground  source={require('../assets/owl-modal.png')}
                          style = {styles.container}>
                <Modal            
                        animationType = {"fade"}  
                        transparent = {true}  
                        visible = {visibility}>  

                        {/*All views of Modal*/}  
                        <View style = {styles.modal}> 

                            <Text style = {styles.text}>Modal is open!</Text>  
                            <Button title="Click To Close Modal" 
                                    color="#b0c4de"
                                    onPress = {() => {setVisibility(!visibility)}}/> 

                        </View>  
                </Modal>  
              
              {!visibility ? (
                <Button   
                        color="#b0c4de"
                        title="Click To Open Modal"   
                        onPress = {() => {setVisibility(true)}}  
                /> 

              ) : null}

        </ImageBackground> 
       
    )
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        // justifyContent: 'center',  
        backgroundColor: '#ecf0f1', 
        height: null,
        width: null 
    },  

    modal: {  
        justifyContent: 'center',  
        alignItems: 'center',   
        backgroundColor : "#b0c4de",   
        height: 200 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 1,  
        borderColor: '#fff',    
        marginTop: 400,  
        marginLeft: 40,  
     
     }, 

     text: {  
        color: '#3f2949',  
        marginBottom: 10,
        fontStyle: "italic"  
     }  
  });  