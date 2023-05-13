import { StyleSheet, Pressable, Text} from "react-native";


export default function PressableComponemnt({onPress, title, style}) {


    return (
      <>
        <Pressable  onPress={onPress} 
                    style={[styles.button, style]}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      </>
    );
  }
  
  
  const styles = StyleSheet.create({
      button: {
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 15,
      },
      text: {
          color: "white",
          fontFamily: "PoppinsBold"
      }
  })
  