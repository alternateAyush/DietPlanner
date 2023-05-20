import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Image
} from "react-native";
import React, { useState } from "react";

const CaloriePage = () => {
  const [meal, setMeal] = useState("");
  const [calorie, setCalorie] = useState("");
  const [calorieList, setCalorieList] = useState([
    {
      meal: "Dal Rice",
      calorie: 100,
      timeStamp: "1:2:30-19/5/23",
    },
    {
      meal: "Paratha",
      calorie: 120,
      timeStamp: "9:30:30-19/5/23",
    },
  ]);

  function handlePress() {
    const date = new Date();
    const stamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}-${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    setCalorieList([
      {
        meal,
        calorie,
        timeStamp: stamp,
      },
      ...calorieList,
    ]);
    setCalorie('');
    setMeal('');
  }

  return (
    <View style={styles.calorieContainer}>
      <Text style={styles.calorieTitle}>Add Food</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Meal Here"
          onChangeText={(newText) => setMeal(newText)}
          defaultValue={meal}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter Calorie Here"
          onChangeText={(newText) => setCalorie(newText)}
          defaultValue={calorie}
        />
        <Button title="Save" color="green" onPress={handlePress} />
      </View>

      <ScrollView style={styles.calorieList}>
        {calorieList.map((item) => {
          return (
            <View style={styles.calorieListItem}>
              <View>
                <Text style={styles.calorieListText}>Meal: {item.meal}</Text>
                <Text style={styles.calorieListText}>
                  Calorie Taken: {item.calorie}
                </Text>
                <Text style={styles.calorieListText}>At: {item.timeStamp}</Text>
              </View>
              <Image source={require('../assets/calorie-logo.png')} style={{width:100, height:100, borderRadius:50}}/>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 250,
    alignItems: "stretch",
    margin: 10,
  },
  calorieContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fbfcf8",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  calorieTitle: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  calorieList: {
    margin: 10,
  },
  calorieListItem: {
    flexDirection:'row',
    justifyContent:'space-between',
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
  },
  inputText: {
    height: 40,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
  calorieListText: {
    fontSize: 18,
  },
});

export default CaloriePage;
