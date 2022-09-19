import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 50,
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    time: {
        color : '#5D5D5D',
    },
    rightContainer: {
        width: 100,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    }
});

export default styles;