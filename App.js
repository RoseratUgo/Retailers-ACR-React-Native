import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import RevendeurTypes from './src/components/RevendeurTypes'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function Revendeur0({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/error.jpg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                  Andrew CARRUTHERS - Farrier
                </Text>
                <Text style={styles.time}>
                  33 Douglas Ridge Close
                </Text>
                <Text style={styles.time}>
                  T2Z 2M3 CALGARY
                </Text>
                <Text style={styles.time}>
                  CANADA
                </Text>
                <Text style={styles.time}>
                  Phone: 403-619-4592
                </Text>
                <Text style={styles.time}>
                  acarruthersfarrier@gmail.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur1({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/1.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                  VALLEY FARRIER SUPPLY
                </Text>
                <Text style={styles.time}>
                  709 W. Main Street, Building B
                </Text>
                <Text style={styles.time}>
                  OR 97038 MOLALLA
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: (503) 829-6968
                </Text>
                <Text style={styles.time}>
                  Fax: (503) 829-6970
                </Text>
                <Text style={styles.time}>
                  https://valleyfarrier.com/shop/
                </Text>
            </View>
        </View>
  );
}

function Revendeur2({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/2.png')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                  THE HORSESHOE BARN
                </Text>
                <Text style={styles.time}>
                  1223 Blumenfeld Drive
                </Text>
                <Text style={styles.time}>
                  CA 95815 SACRAMENTO
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: (916) 925-6534
                </Text>
                <Text style={styles.time}>
                  horseshoebarn@sbcglobal.net
                </Text>
                <Text style={styles.time}>
                  http://www.thehorseshoebarn.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur3({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/3.png')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                  CANOGA FARRIER SUPPLY
                </Text>
                <Text style={styles.time}>
                21608 Marilla St
                </Text>
                <Text style={styles.time}>
                91311 CHATSWORTH
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 (818) 702-6375
                </Text>
                <Text style={styles.time}>
                  http://canogafarriersupply.com/
                </Text>
            </View>
        </View>
  );
}

function Revendeur4({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/8.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                Stockhoff`s Horseshoes Arizona
                </Text>
                <Text style={styles.time}>
                10045 E Dynamite Blvd Ste 105
                </Text>
                <Text style={styles.time}>
                Scottsdale, AZ 85262
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
            </View>
        </View>
  );
}

function Revendeur5({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/5.png')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                OLEO ACRES FARRIER & BLACKSMITH SUPPLY
                </Text>
                <Text style={styles.time}>
                10367 West Centennial Road
                </Text>
                <Text style={styles.time}>
                80127 LITTLETON
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 303979 0446
                </Text>
                <Text style={styles.time}>
                oafarriersupply@outlook.com
                </Text>
                <Text style={styles.time}>
                http://www.OAFBS.COM
                </Text>
            </View>
        </View>
  );
}

function Revendeur6({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/6.png')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                TEXAS FARRIER SUPPLY
                </Text>
                <Text style={styles.time}>
                603 S. New Hope Road
                </Text>
                <Text style={styles.time}>
                76060 KENNEDALE
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 817 478 6105
                </Text>
                <Text style={styles.time}>
                sales@texasfarriersupply.com
                </Text>
                <Text style={styles.time}>
                http://http://www.texasfarriersupply.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur7({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/7.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                Equine Hoof Solutions LLC
                </Text>
                <Text style={styles.time}>
                1638 Deer Park Dr
                </Text>
                <Text style={styles.time}>
                77845 COLLEGE STATION
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 936 - 870 - 5707
                </Text>
                <Text style={styles.time}>
                http://www.equinehoofsolutions.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur8({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/8.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                Stockhoff`s Horseshoes La grange
                </Text>
                <Text style={styles.time}>
                1801 Button Ct
                </Text>
                <Text style={styles.time}>
                40031 La Grange
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                http://www.stockhoffsonline.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur9({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/8.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                Stockhoff`s Horseshoes Lexington
                </Text>
                <Text style={styles.time}>
                4981 Old US Hwy 60
                </Text>
                <Text style={styles.time}>
                40510 Lexington
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 800-421-1002
                </Text>
                <Text style={styles.time}>
                http://www.stockhoffsonline.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur10({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/10.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                YODER FARRIER SUPPLY
                </Text>
                <Text style={styles.time}>
                8900 Township Rd 652
                </Text>
                <Text style={styles.time}>
                OH 44627 FREDERICKSBURG
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 (330) 471-1940
                </Text>
                <Text style={styles.time}>
                  Fax: +1 (330)-698-3200
                </Text>
                <Text style={styles.time}>
                https://www.facebook.com/pages/Yoder-Blacksmith-Supplies-Horseshoeing-and-Equine-Supplies-Amish-Country/1450741498529475
                </Text>
            </View>
        </View>
  );
}

function Revendeur11({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/8.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                Stockhoff`s Horseshoes New Jersey
                </Text>
                <Text style={styles.time}>
                920 New Jersey 33 business #7
                </Text>
                <Text style={styles.time}>
                07728 Freehold
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 800-421-1002
                </Text>
                <Text style={styles.time}>
                http://www.stockhoffsonline.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur12({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/12.jpeg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                Northeast Farrier Supply
                </Text>
                <Text style={styles.time}>
                210 Holabird Ave, Winsted
                </Text>
                <Text style={styles.time}>
                CT06098 WINSTED
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 860-379-8553
                </Text>
                <Text style={styles.time}>
                https://www.northeastfarrier.com/
                </Text>
            </View>
        </View>
  );
}

function Revendeur13({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/13.png')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                MEADER SUPPLY CORP.
                </Text>
                <Text style={styles.time}>
                23 Meaderboro Rd.
                </Text>
                <Text style={styles.time}>
                03867 ROCHESTER
                </Text>
                <Text style={styles.time}>
                  USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 603 332 3032
                </Text>
                <Text style={styles.time}>
                meader@meadersupply.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur14({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/14.png')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                Maréchalerie Bromont Inc.
                </Text>
                <Text style={styles.time}>
                31-A, ch. des Carrières
                </Text>
                <Text style={styles.time}>
                J2L 1S1 BROMONT QUEBEC
                </Text>
                <Text style={styles.time}>
                CANADA
                </Text>
                <Text style={styles.time}>
                  Phone: 1-877-267-2759
                </Text>
                <Text style={styles.time}>
                  Fax: 1-450-534-2760
                </Text>
                <Text style={styles.time}>
                cynthia@marechaleriebromont.com
                </Text>
                <Text style={styles.time}>
                http://www.marechaleriebromont.com
                </Text>
            </View>
        </View>
  );
}

function Revendeur15({ navigation }) {
  return(
    <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./src/assets/images/15.jpg')}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                PALM BEACH FARRIER SUPPLY, INC.
                </Text>
                <Text style={styles.time}>
                3500 Fairlane Farms Rd. Suite #13
                </Text>
                <Text style={styles.time}>
                33414 WELLINGTON FLORIDA
                </Text>
                <Text style={styles.time}>
                USA
                </Text>
                <Text style={styles.time}>
                  Phone: +1 (561) 204-5022
                </Text>
                <Text style={styles.time}>
                  Fax: +1 (561) 204-5021
                </Text>
                <Text style={styles.time}>
                palmbeachfs@comcast.net
                </Text>
                <Text style={styles.time}>
                http://www.palmbeachfarriersupply.net/
                </Text>
            </View>
        </View>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur0"
        component={Revendeur0}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur1"
        component={Revendeur1}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur2"
        component={Revendeur2}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur3"
        component={Revendeur3}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur4"
        component={Revendeur4}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur5"
        component={Revendeur5}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur6"
        component={Revendeur6}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur7"
        component={Revendeur7}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur8"
        component={Revendeur8}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur9"
        component={Revendeur9}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur10"
        component={Revendeur10}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur11"
        component={Revendeur11}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur12"
        component={Revendeur12}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur13"
        component={Revendeur13}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur14"
        component={Revendeur14}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Revendeur15"
        component={Revendeur15}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="RevendeurTypes"
        component={RevendeurTypes}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
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
