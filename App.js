import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const CustomText = (props) =>{
  return (
    <View style = {styles.square}>
      <Text>
        Hello, World
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
          <CustomText />
          <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  square:{
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',

  }

});
