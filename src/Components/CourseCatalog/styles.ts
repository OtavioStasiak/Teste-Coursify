import { StyleSheet } from "react-native";
import { Colors } from "../../Colors/Colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 15,
    },
    title: {
        fontWeight: 'bold',
        color: Colors.Second_Green,
        fontSize: 25,
    },
    contentTitle: {
        width: '70%',
        paddingRight: 20
        
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleButton: {
        fontSize: 15,
        paddingRight: 6
    }
})