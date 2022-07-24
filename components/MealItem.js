import { Image, Pressable, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function MealItem({id, title, imageUrl, duration, complexity, affordability}){

    const navigation = useNavigation()                         // using this because MealItem is not an registered screen but we need to use navigation in this


    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {
            mealId: id
        })
    }
    

    return <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> pressed ? styles.buttonPressed : null } onPress={selectMealItemHandler}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
        
    </View>
}

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18, 
        margin: 8
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressed:{
        opacity: 0.5
    },
})

export default MealItem