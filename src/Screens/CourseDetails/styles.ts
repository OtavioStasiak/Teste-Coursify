import { StyleSheet } from "react-native";
import { Colors } from "../../Colors/Colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center'
    },
    image: {
        width: '85%',
        height: 200,
        borderRadius: 10,
        marginBottom: 30
    },
    title: {
        color: Colors.Primary_Green,
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 50,
        paddingVertical: 20
    },
    content: {
        width: '85%'
    }
})