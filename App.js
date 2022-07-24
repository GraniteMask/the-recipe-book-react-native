import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealsDetailScreen';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{                              // to apply in all of the screens
          headerStyle: {backgroundColor: '#351401'},            
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: 'All Categories',
            headerTitleAlign: 'center'
            // headerStyle: {backgroundColor: '#351401'},
            // headerTintColor: 'white',
            // contentStyle: { backgroundColor: '#3f2f25' }
          }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          // options={({route, navigation}) =>{
          //   const catId = route.params.categoryId
          //   return{
          //     title: catId
          //   }
          // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} 
          // options={{
          //   headerRight: () => {
          //     return <Button title='In the header' />                          // This method is not useful if we want to do direct communication from the screen page itself. For that we need to
          //   }                                                                     add these in the screen page. see the MealDetailScreen page for more info.
          // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
