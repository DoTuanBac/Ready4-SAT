import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Title, Caption, Drawer } from 'react-native-paper'
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import Avatar from '../components/Home/Avatar'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

export function DrawerContent(props){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <ScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.row}>
                            <Avatar navigation={props.navigation} color={'#05B5CC'}/>
                            <View style={{flowDirection: 'column', flex: 1, padding: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Username</Text>
                                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                                    <Text>Test Date</Text>
                                    <Text>Jul 12, 2020</Text>
                                </View>
                                <View style={[styles.row, {justifyContent: 'space-between'}]}> 
                                    <Text>Desired Score</Text>
                                    <Text>1200</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.section}>
                        <View style={[styles.row, {width: '100%'}]}>
                            <AntDesign 
                                name='iconfontdesktop' color={'#05B5CC'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color:'#05B5CC', fontSize: 16}}>Ready4 SAT Web</Text>
                        </View>
                        <View style={[styles.row, {width: '100%'}]}>
                            <MaterialCommunityIcons 
                                name='school' color={'#05B5CC'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color:'#05B5CC', fontSize: 16}}>My Schools</Text>
                        </View>
                        <View style={[styles.row, {width: '100%'}]}>
                            <FontAwesome5 
                                name='school' color={'#05B5CC'} size={20}
                                style={styles.icon}
                            />
                            <Text style={{color:'#05B5CC', fontSize: 16}}>School Matcher</Text>
                        </View>
                        <View style={[styles.row, {width: '100%'}]}>
                            <MaterialIcons
                                name='get-app' color={'#05B5CC'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color:'#05B5CC', fontSize: 16}}>Upgrade my app</Text>
                        </View>
                        <View style={[styles.row, {width: '100%', backgroundColor: '#0E2C3D'}]}>
                            <AntDesign
                                name='questioncircleo' color={'white'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color:'white', fontSize: 16}}>Question Of The Day</Text>
                        </View>
                        <View style={[styles.row, {width: '100%', backgroundColor: '#0E2C3D'}]}>
                            <Feather
                                name='bookmark' color={'white'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color: 'white', fontSize: 16}}>Bookmarks</Text>
                        </View>
                        <View style={[styles.row, {width: '100%', backgroundColor: '#0E2C3D', borderBottomWidth: 2, borderBottomColor: 'white'}]}>
                            <MaterialCommunityIcons
                                name='account-question' color={'white'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color: 'white', fontSize: 16}}>Tutors</Text>
                        </View>
                        <View style={[styles.row, {width: '100%', backgroundColor: '#0E2C3D'}]}>
                            <Feather
                                name='thumbs-up' color={'white'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color:'white', fontSize: 16}}>Rate Us</Text>
                        </View>
                        <View style={[styles.row, {width: '100%', backgroundColor: '#0E2C3D'}]}>
                            <Feather
                                name='share-2' color={'white'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color: 'white', fontSize: 16}}>Share</Text>
                        </View>
                        <View style={[styles.row, {width: '100%', backgroundColor: '#0E2C3D'}]}>
                            <MaterialIcons
                                name='notifications-none' color={'white'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color: 'white', fontSize: 16}}>Notifications</Text>
                        </View>
                        <View style={[styles.row, {width: '100%', backgroundColor: '#0E2C3D'}]}>
                            <AntDesign
                                name='setting' color={'white'} size={24}
                                style={styles.icon}
                            />
                            <Text style={{color:'white', fontSize: 16}}>Setting</Text>
                        </View>
                    </Drawer.Section>
                </View>
                </ScrollView>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 10,
      borderBottomColor: 'grey',
      borderBottomWidth: 2
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 5,
    },
    icon: {
        paddingHorizontal: 10,
        paddingVertical: 12
    }
})