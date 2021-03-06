import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, View, Text, Modal} from 'react-native';
import { Feather, SimpleLineIcons, FontAwesome, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import LeaderboardScreen from '../screens/LeaderboardScreen'
import AnalyticsScreen from '../screens/AnalyticsScreen'
import SchoolsScreen from '../screens/SchoolsScreen'
import TestScreen from '../screens/TestScreen'
import VocabScreen from '../screens/VocabScreen'
import PracticeScreen from '../screens/PracticeScreen'
import CalculatorScreen from '../screens/CalculatorScreen'
import VocabDetailScreen from '../screens/VocabDetailScreen'
import VocabHelpScreen from '../screens/VocalHelpScreen'
import TestDetailScreen from '../screens/TestDetailScreen'
import VocabListScreen from '../screens/VocabListScreen'
import MyProfileScreen from "../screens/MyProfileScreen";
import MyTestScreen from "../screens/MyTestScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";
import ResultScreen from '../screens/ResultScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import RegisterDetailScreen from '../screens/RegisterDetailScreen'
import IntroduceScreen from '../screens/IntroduceScreen'
import ForgotScreen from '../screens/ForgotScreen'
import NewsFeedDetailScreen from "../screens/NewsFeedDetailScreen";
import BookmarkedScreen from "../screens/BookmarkedScreen";

const Stack = createStackNavigator();

export default function HomeStack(props) {
    const [visible, setVisible] = React. useState(false);

    const modalOfficial = (
        <TouchableOpacity
            style={{backgroundColor:"#f9fafb", width:"80%", borderRadius:2, marginBottom: 50,}}
            onPress={() => { setVisible(!visible) }}
        >
            <View style={{padding: 20,}}>
                <Text style={{fontSize: 18, color: '#075769'}}>The leaderboard displays the leaderboards of all people most effectively in SAT.</Text>
            </View>
            <View style={{alignItems: 'flex-end', padding: 10,}}>
                <View style={{borderRadius:5, marginHorizontal:10, paddingVertical:10, paddingHorizontal:20,backgroundColor:"#f9fafb", marginRight: -5,}}>
                    <Text style={{color: '#05B5CC'}}>GOT IT!</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Introduce"
        component={IntroduceScreen}
        options={{
          headerStyle: {backgroundColor: 'white'},
          title: '',
          headerLeft: () =>
          <View></View>,
          headerRight: () =>
            <TouchableOpacity
             onPress={() =>props.navigation.navigate('Login')}
              style={{marginRight: 16}}
            >
             <Text style={{color:"black", fontWeight:"bold",fontSize:16}}>Log In</Text>
            </TouchableOpacity>,

          }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#05B5CC'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.openDrawer()}
              style={{marginLeft: 16}}
            >
              <Feather name='menu' size={24} color={'white'}/>
            </TouchableOpacity>,
          headerRight: () =>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Leaderboard')}
                style={{marginRight: 16, paddingHorizontal: 4}}
              >
                <SimpleLineIcons name='trophy' size={24} color={'white'}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('NewsFeed')}
                style={{marginRight: 16, paddingHorizontal: 4}}
              >
                <FontAwesome name='newspaper-o' size={24} color={'white'}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Analytics')}
                style={{marginRight: 16, paddingHorizontal: 4}}
              >
                <SimpleLineIcons name='chart' size={24} color={'white'}/>
              </TouchableOpacity>
            </View>
          }}
        />
      <Stack.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
            headerStyle: {backgroundColor: '#042538'},
            headerTintColor: 'white',
            headerTitleStyle: {color: 'white', marginLeft: -28,},
            headerRight: () =>
                <TouchableOpacity style={{marginRight: 16}} onPress={()=> setVisible(!visible)}>
                    <AntDesign name='question' size={24} color={'white'}/>
                    <Modal
                        transparent={true}
                        visible={visible}
                    >
                        <View style={{backgroundColor:"#00000099", flex:1, alignItems: 'center', justifyContent: 'center',}}>
                            <View>
                                {modalOfficial}
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>,
        }}
      />
      <Stack.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          headerStyle: {backgroundColor: '#05B5CC'},
          headerTintColor: 'white',
          headerTitleStyle: {color: 'white', marginLeft: -28,},
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
              <AntDesign name='arrowleft' size={24} color={'white'}/>
            </TouchableOpacity>,
        }}
      />
      <Stack.Screen
        name="Schools"
        component={SchoolsScreen}
      />
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={{
            headerStyle: {backgroundColor: '#0E2C3D'},
            headerTintColor: 'white',
            title: '',
            headerTitleStyle: {color: 'white', marginLeft: -28,}
        }}

      />
      <Stack.Screen
        name="Question"
        component={TestDetailScreen}
        options={{

          headerStyle: {backgroundColor: '#0E2C3D'},
          headerTintColor: 'white',
          title: '',
          headerTitleStyle: {color: 'white', marginLeft: -28,},
            headerRight: () =>
            <TouchableOpacity   onPress={() =>props.navigation.navigate('VocabHelp')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo  style={{marginRight: 16}} name="info" size={16} color="white" />
              </View>
              </TouchableOpacity>

          }}
      />
      <Stack.Screen
        name="Vocab"
        component={VocabScreen}
         options={{

              headerStyle: {backgroundColor: '#0E2C3D'},
              headerTintColor: 'white',
              title: 'Vocabulary',
              headerTitleStyle: {color: 'white', marginLeft: -28,},

          headerRight: () =>
          <TouchableOpacity   onPress={() =>props.navigation.navigate('VocabHelp')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Entypo  style={{marginRight: 16}} name="info" size={16} color="white" />
            </View>
            </TouchableOpacity>
          }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
            headerStyle: {backgroundColor: '#042538'},
            headerTintColor: 'white',
            title: 'My Profile',
            headerTitleStyle: {color: 'white', marginLeft: -28,},
        }}
      />
      <Stack.Screen
          name="MyTest"
          component={MyTestScreen}
          options={{
              headerStyle: {backgroundColor: '#05B5CC'},
              headerTintColor: 'white',
              title: 'My Test',
              headerTitleStyle: {color: 'white', marginLeft: -28,},
          }}
      />
      <Stack.Screen
          name="Bookmarked"
          component={BookmarkedScreen}
          options={{
              headerStyle: {backgroundColor: '#0E2C3D'},
              headerTintColor: 'white',
              headerTitleStyle: {color: 'white', marginLeft: -28,},
          }}
      />
      <Stack.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{
            headerStyle: {backgroundColor: '#0E2C3D'},
            headerTintColor: 'white',
            headerTitleStyle: {color: 'white', marginLeft: -28,},
              headerRight: () =>
                  <TouchableOpacity
                      onPress={() => props.navigation.navigate('Bookmarked')}
                      style={{marginRight: 16}}
                  >
                      <MaterialCommunityIcons name="bookmark-multiple" size={20} color="white" />
                  </TouchableOpacity>,
          }}
      />
      <Stack.Screen
          name="NewsFeedDetail"
          component={NewsFeedDetailScreen}
          options={{
              headerStyle: {backgroundColor: '#0E2C3D'},
              headerTintColor: 'white',
              title: '',
              headerTitleStyle: {color: 'white', marginLeft: -28,},
          }}
      />

      <Stack.Screen
        name="Practice"
        component={PracticeScreen}
        options={{
          headerStyle: {backgroundColor: '#0E2C3D'}
        }}
      />
      <Stack.Screen
        name="Calculator"
        component={CalculatorScreen}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#0E2C3D'}
        }}
      />
      <Stack.Screen
        name="Learn"
        component={VocabDetailScreen}
        options={{

          headerStyle: {backgroundColor: '#0E2C3D'},

          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white", fontWeight:"bold",fontSize:16}}>Done</Text>
            </TouchableOpacity>,
          headerRight: () =>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity   onPress={() =>props.navigation.navigate('VocabHelp')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Entypo  style={{marginRight: 16}} name="info" size={16} color="white" />
            </View>
            </TouchableOpacity>
               <TouchableOpacity   onPress={() =>props.navigation.navigate('VocabList')}>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>


                 <FontAwesome style={{marginRight: 16}} name="list-ul" size={16} color="white" />

               </View>
               </TouchableOpacity>
               </View>
          }}
      />
         <Stack.Screen
        name="VocabHelp"
        component={VocabHelpScreen}
        options={{
          headerStyle: {backgroundColor: '#0E2C3D'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white", fontWeight:"bold", fontSize:16}}>Back</Text>
            </TouchableOpacity>,

          }}
      />
        <Stack.Screen
        name="VocabList"
        component={VocabListScreen}
        options={{
            headerStyle: {backgroundColor: '#0a566b'},
            headerTintColor: 'white',
            title: '',
        }}
      />



<Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: {backgroundColor: '#082e38'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white", fontWeight:"bold",fontSize:16}}>Cancel</Text>
            </TouchableOpacity>,

          }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{
          headerStyle: {backgroundColor: '#082e38'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white", fontWeight:"bold",fontSize:16}}>Cancel</Text>
            </TouchableOpacity>,

          }}
      />
        <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerStyle: {backgroundColor: '#082e38'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white", fontWeight:"bold",fontSize:16}}>Back</Text>
            </TouchableOpacity>,

          }}
      />
        <Stack.Screen
        name="RegisterDetail"
        component={RegisterDetailScreen}
        options={{
          headerStyle: {backgroundColor: '#082e38'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white", fontWeight:"bold",fontSize:16}}>Back</Text>
            </TouchableOpacity>,

          }}
      />
       
    </Stack.Navigator>
  );
}

