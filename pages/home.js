import { StyleSheet, Text, View } from 'react-native';
import {ButtonList,AppLogo} from '../components';
import * as React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppLogo/>
      <Text style={styles.title}>Diet App Navigation</Text>
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
    fontSize:30,
    margin:10,
    fontWeight:'bold',
  }
});

export default Home;