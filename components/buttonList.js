import { View,StyleSheet,Button } from 'react-native';
import * as React from 'react';

const ButtonList = ({navigation})=>{
    return <View style={styles.buttonList}>
        <Button color='black' title='Calorie Counter' onPress={() => navigation.navigate('Calorie Counter')}/>
        <Button color='black' title='Weight Progress' onPress={() => navigation.navigate('Weight Progress')}/>
        <Button color='black' title='Healthy Recipe' onPress={() => navigation.navigate('Healthy Recipe')}/>
        <Button color='black' title='Exercise' onPress={() => navigation.navigate('Exercise')}/>
        <Button color='black' title='Reminders' onPress={() => navigation.navigate('Reminders')}/>
    </View>
}

const styles = StyleSheet.create({
    buttonList: {
      height:225,
      margin:10,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'stretch',
    },
  });

export default ButtonList;