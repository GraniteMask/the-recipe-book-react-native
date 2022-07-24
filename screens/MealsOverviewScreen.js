import { StyleSheet, FlatList, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

// useRoute is alternative to route used here

function MealsOverviewScreen({ route }){                // route and navigation are two properties we get when we register a js file as screen in App.js

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData){
        return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>
    }

    return <View style={styles.container}>
       <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
    </View>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
})