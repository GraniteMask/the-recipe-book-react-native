import { Pressable, StyleSheet, Text, View, Platform } from "react-native"

function CategoryGridTile({title, data}){
    return <View style={styles.gridItem}>
        <Pressable style={styles.button} android_ripple={{color: "#ccc"}}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',   // needed to apply shadow property on iOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'  // to hide the android ripple around the corners. But it also disables the styling in iOS. To rectify it use Platform.OS.
    },
    button:{
        flex: 1
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
})


export default CategoryGridTile