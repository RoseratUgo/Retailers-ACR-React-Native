import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },

    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },

    listView: {
        position: 'absolute',
        top: 120,
    },

    autocompletecontainer: {
        position: 'absolute',
        top: 110,
        left: 10,
        right: 10,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {

    },

    circle: {
        width: 7,
        height: 7,
        backgroundColor: 'black',
        position: 'absolute',
        top: 77,
        left: 10,
        borderRadius: 7,
    },
    line: {
        width: 1,
        height: 42,
        backgroundColor: '#cfcfcf',
        position: 'absolute',
        top: 88,
        left: 12.9,
    },
    square: {
        width: 7,
        height: 7,
        backgroundColor: 'black',
        position: 'absolute',
        top: 135,
        left: 10,

    }
});

export default styles;