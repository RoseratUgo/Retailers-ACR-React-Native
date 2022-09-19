import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../Boutton/styles';
import {useNavigation} from '@react-navigation/native'

const Boutton = (props) => {
    const navigation = useNavigation();
    const goToMarker = () => {
        navigation.navigate('RevendeurTypes')
    }
    return(
        <View style={styles.container}>
            <Pressable onPress={goToMarker}>
                <Text style={styles.text}>Voir la liste de tous nos revendeurs !</Text>
            </Pressable>
        </View>
    );
};

export default Boutton;