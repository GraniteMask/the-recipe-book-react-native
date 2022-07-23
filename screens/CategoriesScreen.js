import { FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

// useNavigation hook can be used as alternative

function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate("MealsOverview", { categoryId: itemData.item.id })          // { categoryId: itemData.item.id } -  passing the parameters to MealsOverviewScreen page
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
}

export default CategoriesScreen