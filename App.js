import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Keyboard } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.baseText}>Đăng nhập</Text>
      <Text>Nhập số điện thoại</Text>
      <Text>Dùng số điện thoại để đăng nhậpzdds hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <KeyboardAvoidingView behavior='padding'>
        
        <TextInput 
        style= {styles.input}
        placeholder="Nhập số điện thoại của bạn"
        value ={Number}
        keyboardType='phone-pad'
      />
      </KeyboardAvoidingView>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    top: 20
  },
  baseText: {
    fontWeight: 'bold',
  },
  input: {
    height: 40
  }
});
