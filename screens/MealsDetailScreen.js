import { Image, StyleSheet, Text, View } from "react-native"
import List from "../components/MealDetail/List"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from '../data/dummy-data'

function MealDetailScreen({route}){

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration} 
            affordability={selectedMeal.affordability} 
            complexity={selectedMeal.complexity} 
            textStyle={styles.detailText}
        />

        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients}/>

        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps}/>

    </View>
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
})