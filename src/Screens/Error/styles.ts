import { StyleSheet } from "react-native";
import { Colors } from "../../Colors/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.Primary_Yellow,
        position: 'absolute',
        top: '60%'
    },
    subtitle: {
        fontSize: 15,
        paddingHorizontal: '10%',
        position: 'absolute',
        top: '65%',
        color: Colors.Primary_Gray,
        textAlign: 'center'
    }
})