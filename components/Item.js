import { View, StyleSheet, Text} from "react-native"

const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fdf5e6',
      padding: 20,
      margin: 10, 
      width: 150,
      opacity: 0.6  
    },
    title: {
        fontSize: 24,
      },
  });

  export default Item