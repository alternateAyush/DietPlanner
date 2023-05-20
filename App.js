import React,{useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,CaloriePage,ExercisePage,WeightPage,RecipePage,RemindersPage,RecipeDetailPage} from './pages';


const Stack = createNativeStackNavigator();

function App() {
  const [meal,setMeal] = useState({});
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Health Island" component={Home} />
        <Stack.Screen name="Calorie Counter" component={CaloriePage} />
        <Stack.Screen name="Weight Progress" component={WeightPage} />
        <Stack.Screen name="Healthy Recipe">
  {(props) => <RecipePage {...props} setMeal={setMeal} />}
</Stack.Screen>
        <Stack.Screen name="Exercise" component={ExercisePage} />
        <Stack.Screen name="Reminders" component={RemindersPage} />
        <Stack.Screen name="Recipe">
  {(props) => <RecipeDetailPage {...props} meal={meal} />}
</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;