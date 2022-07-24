import { Image, StyleSheet, Text, View, ScrollView } from "react-native"
import List from "../components/MealDetail/List"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from '../data/dummy-data'
import { useLayoutEffect } from 'react'
import IconButton from "../components/IconButton"

function MealDetailScreen({route, navigation}){

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    function headerButtonPressHandler(){
        console.log('press')
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () =>{
                return <IconButton onPress={headerButtonPressHandler} icon="star" color="white"/>
            },
            title: 'Meal Details', 
            headerTitleAlign: 'center'
        })
    },[])

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