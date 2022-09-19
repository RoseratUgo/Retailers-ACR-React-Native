import React from 'react';
import { View, Dimensions } from 'react-native';

import HomeMap from '../../components/HomeMap';
import Boutton from '../../components/Boutton'

const HomeScreen = (props) => {
    return(
        <View>
            <View style={{height: Dimensions.get('window').height - 25}}>
                <HomeMap />
                <Boutton />
            </View>
        </View>
    );
};

export default HomeScreen;