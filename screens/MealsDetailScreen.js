import { Text } from "react-native"

function MealDetailScreen({route}){

    const mealId = route.params.mealId

    return <Text>Meal Detail {mealId}</Text>
}

export default MealDetailScreen