import React, {useState} from 'react';
import {Pressable, Text, View, Image, StyleSheet, Button} from 'react-native';

const HungryOwl = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.container}>
      <Image
            source={require('../assets/owl-hungry.png')}
            style={styles.image} 
      />

      <View style={styles.textArea}>
          <Text style={[styles.text, { fontSize: isHungry  ? 12 : 20}]}>I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!</Text>
      </View>

      <Pressable    style={[styles.btnPressMe, { backgroundColor: isHungry  ? '#cd853f' : '#c0c0c0'}]}
                    onPress={() => {setIsHungry(false);}}
                    disabled={!isHungry}>
                    <Text style={styles.text}>{isHungry ? 'Click here to pour me some milk, please!' : 'Thank you!'}</Text>
      </Pressable>

    </View>
  );
};

const FoodScreen = () => {
  return (
    <>
      <HungryOwl name="Munkus" />
    </>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
container:{
  flex: 1, 
  alignItems: "center",
},

image: {
    width: 400,
    height: 400
},

textArea: {
    flex: 0.5,
    backgroundColor: "#daa520",
    width:"100%",
    justifyContent: "center",
    alignItems:"center",
 },

text: {
  color: "black",
  fontWeight: "bold"
}, 

btnPressMe: {
  flex: 0.5,
  width:"100%",
  justifyContent: "center",
  alignItems:"center",
  // backgroundColor: '#cd853f',
  minWidth: 250
},

})