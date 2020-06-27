import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import LeaderboardScreen from '../screens/LeaderboardScreen'
// import NewsFeedScreen from '../screens/NewsFeedScreen'
import AnalyticsScreen from '../screens/AnalyticsScreen'
import SchoolsScreen from '../screens/SchoolsScreen'
import TestScreen from '../screens/TestScreen'
import VocabScreen from '../screens/VocabScreen'
import MyProfileScreen from '../screens/MyProfileScreen'
import PracticeScreen from '../screens/PracticeScreen'
import VocabDetailScreen from '../screens/VocabDetailScreen'
import TestDetailScreen from '../screens/TestDetailScreen'

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
                style={{marginRight: 16}}
              >
                <Feather name='search' size={24} color={'black'}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('NewsFeed')}
                style={{marginRight: 16}}
              >
                <Feather name='search' size={24} color={'black'}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Analytics')}
                style={{marginRight: 16}}
              >
                <Feather name='search' size={24} color={'black'}/>
              </TouchableOpacity>
            </View>
          }}
        />
      <Stack.Screen 
        name="Leaderboard" 
        component={LeaderboardScreen}
      />
      {/* <Stack.Screen 
        name="NewsFeed" 
        component={NewsFeedScreen}
      /> */}
      <Stack.Screen 
        name="Analytics" 
        component={AnalyticsScreen}
      />
      <Stack.Screen 
        name="Schools" 
        component={SchoolsScreen}
      />
      <Stack.Screen 
        name="Test" 
        component={TestScreen}
      />
           <Stack.Screen 
        name="Question" 
        component={TestDetailScreen}
      />
      <Stack.Screen 
        name="Vocab" 
        component={VocabScreen}
      />

      <Stack.Screen 
        name="MyProfile" 
        component={MyProfileScreen}
      />
      <Stack.Screen 
        name="Practice" 
        component={PracticeScreen}
      />

           <Stack.Screen 
        name="Learn" 
        component={VocabDetailScreen}
      />
      

    </Stack.Navigator>
  );
}
