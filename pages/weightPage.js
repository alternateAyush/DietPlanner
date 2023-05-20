import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";

const WeightPage = () => {
  const [weight, setWeight] = useState("");
  const [weightList, setWeightList] = useState([
    {
      weight: "74 Kg",
      timeStamp: "11:2:30-19/5/23",
    },
    {
      weight: "75 Kg",
      timeStamp: "10:30:30-12/5/23",
    },
  ]);

  function handlePress() {
    const date = new Date();
    const stamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}-${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    setWeightList([
      {
        weight,
        timeStamp: stamp,
      },
      ...weightList,
    ]);
    setWeight("");
  }

  return (
    <View style={styles.weightContainer}>
      <Text style={styles.weightTitle}>Update Progress</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Your Weight"
          onChangeText={(newText) => setWeight(newText)}
          defaultValue={weight}
        />
        <Button title="Save" color="green" onPress={handlePress} />
      </View>

      <ScrollView style={styles.weightList}>
        {weightList.map((item) => {
          return (
            <View style={styles.weightListItem} key={`${Math.floor(Math.random() * 10000)}`}>
              <Image
                source={require("../assets/weight-logo.png")}
                style={styles.weightLogo}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Text style={styles.weightListText}>
                  My weight: {item.weight}
                </Text>
                <Text style={styles.weightListText}>At: {item.timeStamp}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  weightLogo: {
    width: 100,
    height: 100,
  },
  weightContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fbfcf8",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  weightTitle: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  weightList: {
    margin: 10,
  },
  weightListItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 330,
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
    width: 200,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 250,
    alignItems: "center",
    margin: 10,
  },
  weightListText: {
    fontSize: 18,
  },
});

export default WeightPage;
