import { StyleSheet, FlatList, View } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useLayoutEffect } from 'react'

// useRoute is alternative to route used here

function MealsOverviewScreen({ route, navigation }){                // route and navigation are two properties we get when we register a js file as screen in App.js

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

   
    useLayoutEffect(()=>{

        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({ title: categoryTitle})

    },[catId, navigation])

   
    function renderMealItem(itemData){
        const item = itemData.item

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps}/>
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