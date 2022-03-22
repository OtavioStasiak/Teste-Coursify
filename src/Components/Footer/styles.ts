import { StyleSheet } from "react-native";
import { Colors } from "../../Colors/Colors";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '25%',
        backgroundColor: Colors.Primary_Green,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    Image:{

    },
    text: {
        color: Colors.Primary_White,
        paddingTop: 15,
        paddingBottom: 15
    },
    button: {
        backgroundColor: Colors.Primary_Yellow,
        width: '65%',
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: Colors.Primary_White,

    }
})