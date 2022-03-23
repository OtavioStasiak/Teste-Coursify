import { StyleSheet } from "react-native";
import { Colors } from "../../Colors/Colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

    },
    content: {
        width: '27%',
        height: 30,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Colors.Primary_Gray,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        left: '76%',
    
    },
    title: {
        fontWeight: 'bold',
        color: Colors.Primary_Gray,
        top: -5
    },
    contentText: {
        color: Colors.Primary_Gray,
        fontWeight: 'bold',
        marginRight: '20.7%',
        marginLeft: '35%',
        fontSize: 13
    },
    collapsible: {
      paddingLeft: '69.9%',
      marginTop: -7
    }
});