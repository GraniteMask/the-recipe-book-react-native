import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'

// useRoute is alternative to route used here

function MealsOverviewScreen({ route }){                // route and navigation are two properties we get when we register a js file as screen in App.js

    const catId = route.params.categoryId

    return <View style={styles.container}>
        <Text>Meals Overview Screen - {catId}</Text>
    </View>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
})