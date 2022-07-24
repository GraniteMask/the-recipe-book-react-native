import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

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
