import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";

const RecipeDetailPage = ({ meal }) => {
  const totalNutrients = Object.values(meal.totalNutrients);
  const totalDaily = Object.values(meal.totalDaily);
  return (
    <ScrollView style={styles.recipeDetail}>
      <Image source={{ uri: meal.image }} style={styles.recipeDetailImg} />
      <Text style={styles.recipeDetailTitle}>{meal.label} </Text>
      <View style={{ flexDirection: "row", marginHorizontal:10, marginVertical:5, flexWrap:'wrap'}}>
        {meal.dietLabels.map((item) => {
          return <Text style={{ fontSize: 18 ,color:'green',fontWeight:'bold'}}>{item} . </Text>;
        })}
      </View>
      <Text>{meal.mealType}</Text>
      <View style={styles.tag}>
        <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
          Total Nutrients
        </Text>
      </View>
      {totalNutrients.map((item) => {
        return (
          <View style={styles.info}>
            <Text style={styles.label}>
              {item.label}({item.unit}):{" "}
            </Text>
            <Text style={{ fontSize: 18 }}>
              {Math.round((item.quantity + Number.EPSILON) * 100) / 100}
            </Text>
          </View>
        );
      })}
      <View style={styles.tag}>
        <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
          Total % of Daily
        </Text>
      </View>
      {totalDaily.map((item) => {
        return (
          <View style={styles.info}>
            <Text style={styles.label}>
              {item.label}({item.unit}):{" "}
            </Text>
            <Text style={{ fontSize: 18 }}>
              {Math.round((item.quantity + Number.EPSILON) * 100) / 100}
            </Text>
          </View>
        );
      })}
      <View style={styles.tag}>
        <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
          Ingredients
        </Text>
      </View>
      {meal.ingredientLines.map((item) => {
        return (
          <View style={styles.info}>
            <Text style={{ fontSize: 18 }}>{item}</Text>
          </View>
        );
      })}
      <View style={styles.tag}>
        <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
          Total Time : {meal.totalTime}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipeDetail: {
    paddingHorizontal: 5,
    backgroundColor: "#fbfcf8",
  },
  recipeDetailImg: {
    width: 400,
    height: 400,
    marginVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  recipeDetailTitle: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  tag: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 2,
  },
  info: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default RecipeDetailPage;
