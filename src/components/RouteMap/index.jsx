import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = 'AIzaSyCqjfIt9cPZV937eM7oobEwmKrTyExeHIk';

const RouteMap = (props) => {

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.460127,
        longitude: -16.269045,
    }

    return(
            <MapView
                style={{width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.450627,
                    longitude: -16.263045,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="black"
                />
                <Marker
                    coordinate={origin}
                    title={'Origin'}
                />
                <Marker
                    coordinate={destination}
                    title={'Destination'}
                />
            </MapView>
            
    );
};

export default RouteMap;