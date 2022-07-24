import { Image, StyleSheet, Text, View, ScrollView } from "react-native"
import List from "../components/MealDetail/List"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from '../data/dummy-data'
import { useLayoutEffect } from 'react'
import IconButton from "../components/IconButton"
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

function MealDetailScreen({route, navigation}){

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            dispatch(removeFavorite({id: mealId}))
        }else{
            dispatch(addFavorite({id: mealId}))
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () =>{
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color="white" onPress={changeFavoriteStatusHandler}/>
            },
            title: 'About the Dish', 
            headerTitleAlign: 'center'
        })
    },[changeFavoriteStatusHandler, navigation])

    return <ScrollView style={{marginBottom: 15}}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration} 
            affordability={selectedMeal.affordability} 
            complexity={selectedMeal.complexity} 
            textStyle={styles.detailText}
        />

        <View style={{alignItems: "center"}}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>

                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
        

    </ScrollView>
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 350
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color: 'white'
    },
    listContainer:{
        width: '80%',
    }
})