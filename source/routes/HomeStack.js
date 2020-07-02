import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { TouchableOpacity, View,Text } from 'react-native';
import { Feather, SimpleLineIcons, FontAwesome,Entypo,AntDesign } from '@expo/vector-icons'
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

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import RegisterDetailScreen from '../screens/RegisterDetailScreen'
import IntroduceScreen from '../screens/IntroduceScreen'
import ForgotScreen from '../screens/ForgotScreen'
const Stack = createStackNavigator();

export default function HomeStack(props) {
  return (
    <Stack.Navigator>
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
      />
      <Stack.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          headerStyle: {backgroundColor: '#05B5CC'},
          headerTintColor: {color: 'white'},
          headerTitleStyle: {color: 'white'},
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
          headerStyle: {backgroundColor: '#0a566b'},
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
        name="Question"
        component={TestDetailScreen}
        options={{

          headerStyle: {backgroundColor: '#0a566b'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white", fontWeight:"bold",fontSize:16}}>Back</Text>
            </TouchableOpacity>,
            headerRight: () =>
            <TouchableOpacity   onPress={() =>props.navigation.navigate('VocabHelp')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>

              <Text   style={{marginRight: 16,color:"white",fontSize:16,}}>00:00</Text>
              </View>
              </TouchableOpacity>

          }}
      />
      <Stack.Screen
        name="Vocab"
        component={VocabScreen}
         options={{
          headerStyle: {backgroundColor: '#0084ad'},
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{marginLeft: 16}}
            >
             <Text style={{color:"white" ,fontWeight:"bold",fontSize:16}}>Back</Text>
            </TouchableOpacity>,
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
      />
      <Stack.Screen
          name="MyTest"
          component={MyTestScreen}
      />
      <Stack.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{
            headerStyle: {backgroundColor: '#0E2C3D'},
            headerTintColor: {color: 'white'},
            headerTitleStyle: {color: 'white'},
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
        name="Learn"
        component={VocabDetailScreen}
        options={{
          headerStyle: {backgroundColor: '#0084ad'},
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
          headerStyle: {backgroundColor: '#0084ad'},
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
        name="VocabList"
        component={VocabListScreen}
        options={{
          headerStyle: {backgroundColor: '#0084ad'},
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
        name="Login" 
        component={LoginScreen}
        options={{
          headerStyle: {backgroundColor: '#0a566b'},
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
          headerStyle: {backgroundColor: '#0a566b'},
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
          headerStyle: {backgroundColor: '#0a566b'},
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
          headerStyle: {backgroundColor: '#0a566b'},
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
    </Stack.Navigator>
  );
}

