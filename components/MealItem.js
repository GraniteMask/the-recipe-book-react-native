import { Image, Pressable, Text, View, StyleSheet } from 'react-native'

function MealItem({title, imageUrl, duration, complexity, affordability}){
    return <View>
        <Pressable>
            <View>
                <Image source={{ uri: imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View>
                <Text>{duration}m</Text>
                <Text>{complexity.toUpperCase()}</Text>
                <Text>{affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
        
    </View>
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})

export default MealItem