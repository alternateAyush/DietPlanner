import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MealCard = ({ meal,setMeal,navigation}) => {
    function handlePress()
    {
        setMeal(meal.recipe);
        navigation.navigate('Recipe');
    }
  return (
    <View style={styles.mealCard}>
        <Image source= {{uri:`${meal.recipe.image}`}} style={styles.mealImg}/>
        <Text style={styles.mealTitle}>{meal.recipe.label}</Text>
        <Button title='View' color='green' onPress={handlePress}/>
    </View>
  );
};

const styles = StyleSheet.create({
    mealCard:{
        marginVertical:5,
        display:'flex',
        flexDirection:'column',
        height:500,
        width:380,
        borderRadius:10,
        backgroundColor:'white',
    },
    mealImg:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:350,
        width:380,
        zIndex:0,
    },
    mealTitle:{
        fontSize:20,
        fontWeight:'bold',
    },
});


export default MealCard;
