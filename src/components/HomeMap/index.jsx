import React from 'react';
import { Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'


const HomeMap = () => {
    const navigation = useNavigation();

    const goToMarker0 = () => {
        navigation.navigate('Revendeur0')
    }

    const goToMarker1 = () => {
        navigation.navigate('Revendeur1')
    }

    const goToMarker2 = () => {
        navigation.navigate('Revendeur2')
    }
    
    const goToMarker3 = () => {
        navigation.navigate('Revendeur3')
    }

    const goToMarker4 = () => {
        navigation.navigate('Revendeur4')
    }

    const goToMarker5 = () => {
        navigation.navigate('Revendeur5')
    }

    const goToMarker6 = () => {
        navigation.navigate('Revendeur6')
    }

    const goToMarker7 = () => {
        navigation.navigate('Revendeur7')
    }

    const goToMarker8 = () => {
        navigation.navigate('Revendeur8')
    }

    const goToMarker9 = () => {
        navigation.navigate('Revendeur9')
    }

    const goToMarker10 = () => {
        navigation.navigate('Revendeur10')
    }

    const goToMarker11 = () => {
        navigation.navigate('Revendeur11')
    }

    const goToMarker12 = () => {
        navigation.navigate('Revendeur12')
    }

    const goToMarker13 = () => {
        navigation.navigate('Revendeur13')
    }

    const goToMarker14 = () => {
        navigation.navigate('Revendeur14')
    }

    const goToMarker15 = () => {
        navigation.navigate('Revendeur15')
    }

    return(
        <>
            <MapView
                style={{width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.090240,
                    longitude: -95.712891,
                    latitudeDelta: 55.0922,
                    longitudeDelta: 55.0421,
                }}
            >

                    <Marker
                    key={0}
                    coordinate={{ latitude : 50.94123256955327 , longitude : -113.97953114646242}}
                    onPress={goToMarker0}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={1}
                    coordinate={{ latitude : 45.14920981234915 , longitude : -122.58697433134549}}
                    onPress={goToMarker1}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={2}
                    coordinate={{ latitude : 38.60493514863197 , longitude : -121.44073616040559}}
                    onPress={goToMarker2}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={3}
                    coordinate={{ latitude : 34.247544358709916 , longitude : -118.60054007403008}}
                    onPress={goToMarker3}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={4}
                    coordinate={{ latitude : 34.097019344099564 , longitude : -111.93746475188175}}
                    onPress={goToMarker4}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={5}
                    coordinate={{ latitude : 39.56802034293358 , longitude : -105.11431664503282}}
                    onPress={goToMarker5}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={6}
                    coordinate={{ latitude : 32.63287729121035 , longitude : -97.21861375873286}}
                    onPress={goToMarker6}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={7}
                    coordinate={{ latitude : 30.530759398570147 , longitude : -96.24055993180014}}
                    onPress={goToMarker7}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={8}
                    coordinate={{ latitude : 38.393790674387034 , longitude : -85.4016188450705}}
                    onPress={goToMarker8}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={9}
                    coordinate={{ latitude : 38.042115769137574 , longitude : -84.6262444874107}}
                    onPress={goToMarker9}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={10}
                    coordinate={{ latitude : 40.65294095171566 , longitude : -81.7646557584907}}
                    onPress={goToMarker10}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={11}
                    coordinate={{ latitude : 40.236789905209974 , longitude : -74.22736604501087}}
                    onPress={goToMarker11}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={12}
                    coordinate={{ latitude : 41.92366952809018 , longitude : -73.0584384602957}}
                    onPress={goToMarker12}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={13}
                    coordinate={{ latitude : 43.301982637336415 , longitude : -71.03296031607043}}
                    onPress={goToMarker13}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={14}
                    coordinate={{ latitude : 45.30809477208435 , longitude : -72.67208497551682}}
                    onPress={goToMarker14}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

                <Marker
                    key={15}
                    coordinate={{ latitude : 26.63590755856158 , longitude : -80.22395191839752}}
                    onPress={goToMarker15}
                    >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/images/locate.png')}
                    />
                </Marker>

            </MapView>
            
            </>
            
    );
};

export default HomeMap;