import { Image, Text, View } from "react-native"
import MealDetails from "../components/MealDetails"
import { MEALS } from '../data/dummy-data'

function MealDetailScreen({route}){

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return <View>
        <Image source={{ uri: selectedMeal.imageUrl }}/>
        <Text>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}/>
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    </View>
}

export default MealDetailScreen