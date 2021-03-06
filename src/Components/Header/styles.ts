import { StyleSheet } from "react-native";
import { Colors } from "../../Colors/Colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 15,
        backgroundColor: Colors.Primary_White,
        elevation: 2,
        paddingTop: 20
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        height: '100%'
    },
    backButton: {

        marginRight:5,

    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.Primary_Green,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
       width: 160,
       height: '100%'
    }
})