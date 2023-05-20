import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getMeals } from "../apis";
import { MealCard } from "../components";
import DropDownPicker from "react-native-dropdown-picker";

const RecipePage = ({ setMeal, navigation }) => {
  const [loader, setLoader] = useState(true);
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  //
  useEffect(() => {
    setLoader(true);
    const fetchPosts = async () => {
      const response = await getMeals("&diet=balanced");
      if (response.success) {
        setMeals(response.data.hits);
      }
      setLoader(false);
    };
    try {
      fetchPosts();
    } catch {}
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "balanced", value: "balanced" },
    { label: "high-fiber", value: "high-fiber" },
    { label: "high-protein", value: "high-protein" },
    { label: "low-carb", value: "low-carb" },
    { label: "low-fat", value: "low-fat" },
    { label: "low-sodium", value: "low-sodium" },
  ]);
  function handlePress() {
    setLoader(true);
    var q = "";
    if (value != null) {
      q += `&diet=${value}`;
    }
    if (q === "") {
      q = "&diet=balanced";
    }
    const fetchPosts = async () => {
      try {
        const response = await getMeals(q);
        if (response.success) {
          setMeals(response.data.hits);
        }
        setLoader(false);
      } catch {}
    };
    try {
      fetchPosts();
    } catch {}
  }

  function handleSearch() {
    setLoader(true);
    const fetchPosts = async () => {
      const response = await getMeals(`&q=${query}`);
      if (response.success) {
        setMeals(response.data.hits);
      }
      setQuery('');
      setLoader(false);
    };
    try {
      fetchPosts();
    } catch {}
  }

  if (loader) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fbfcf8",
        }}
      >
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fbfcf8",
        padding: 10,
      }}
    >
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Your Meal"
          onChangeText={(newText) => setQuery(newText)}
          defaultValue={query}
        />
        <Button title="Find" color="black" onPress={handleSearch} />
      </View>
      <View
        style={{
          zIndex: 1,
          justifyContent: "flex-start",
          flexDirection: "column",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.picker}
          placeholder="-Select-"
        />
      </View>
      <Button title="Apply" color="black" onPress={handlePress}></Button>
      <ScrollView style={{ marginVertical: 10 }}>
        {meals.map((item) => {
          return (
            <View>
              <MealCard meal={item} setMeal={setMeal} navigation={navigation} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginVertical: 10,
  },
  inputText: {
    height: 40,
    width: 325,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 400,
    alignItems: "center",
    margin: 10,
  },
});

export default RecipePage;
