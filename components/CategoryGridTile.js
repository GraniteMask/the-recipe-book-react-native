import { Pressable, Text, View } from "react-native"

function CategoryGridTile({title, data}){
    return <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile