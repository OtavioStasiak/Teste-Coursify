import { StyleSheet } from "react-native";
import { Colors } from "../../Colors/Colors";

export const styles = StyleSheet.create({
    container: {
        width: 230,
        height: 250,
        borderRadius: 8,
        backgroundColor: Colors.Primary_White,
        alignItems: 'center',
        elevation: 8,
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: 120,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        top: -10,
        marginBottom: 10
    },
    title: {
        color: Colors.Primary_Green,
        fontWeight: 'bold',
        top: -15,
        paddingHorizontal: 5,
        textAlign: 'center'
    },
    readMore: {
        color: Colors.Primary_Yellow,
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        height: '15%',
        backgroundColor: Colors.Primary_White,
        top: 19,
        paddingLeft: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    button: {
        marginTop: 10,
    },
    html: {
        paddingLeft: 13,
        marginTop: -10,
        height: 35
    }
})