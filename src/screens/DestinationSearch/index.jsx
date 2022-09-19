import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow.jsx';

import styles from './styles.js';

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState('');
    const [destinationPlace, setDestinationPlace] = useState('');

    useEffect(() => {
        if (originPlace && destinationPlace) {
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from ?'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 50,
                            left: 10,
                            right: 10,
                        },
                        listView: {
                            position: 'absolute',
                            top: 120,
                        },
                        separator: styles.separator
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyCqjfIt9cPZV937eM7oobEwmKrTyExeHIk',
                        language: 'fr',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to ?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 110,
                            left: 10,
                            right: 10,
                        },
                        separator: styles.separator
                                                   
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyCqjfIt9cPZV937eM7oobEwmKrTyExeHIk',
                        language: 'fr',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    currentLocation={true}
                    currentLocationLabel='Current location'
                />

                <View style={styles.circle} /> 

                <View style={styles.line} /> 

                <View style={styles.square} /> 
                

            </View>

            
        </SafeAreaView>
    );
};

export default DestinationSearch;