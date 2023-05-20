import { StyleSheet, Text, View } from 'react-native';
import {ButtonList,AppLogo} from '../components';
import * as React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppLogo/>
      <Text style={styles.title}>Let us prioritise health together</Text>
      <ButtonList navigation={navigation}/>
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
  title:{
    textAlign:'center',
    alignSelf:'center',
    fontSize:30,
    margin:10,
    fontWeight:'bold',
  }
});

export default Home;