import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

// Custom Tab Icon Component with Image
const TabIcon = ({ imageSource, color, title }: { imageSource: any; color: string; title: string }) => (
  <View style={styles.tabItem}>
    <Image
      source={imageSource}
      style={[styles.tabImage, { tintColor: color , height:18, width:18, resizeMode: 'contain' }]} // Optional tint for active/inactive colors
    />
    <Text style={styles.tabLabel}>{title}</Text>
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabBarOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: Colors.info,
    tabBarInactiveTintColor: Colors.white,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: Colors.secondary,
      borderRadius: 20,
      height: 80,
      shadowColor: Colors.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
      borderTopWidth: 0,
    },
    headerShown: false,
  };

  const tabs = [
    { name: 'index', image: require('../../assets/images/homenew.png'), title: 'Home' },
    { name: 'inplay', image: require('../../assets/images/inplayWite.png'), title: 'Inplay' },
    { name: 'sports', image: require('../../assets/images/sports.png'), title: 'Sports Book' },
    { name: 'casino', image: require('../../assets/images/casino.png'), title: 'Casino' },
    { name: 'more', image: require('../../assets/images/more.png'), title: 'More' },
  ];

  return (
    <Tabs screenOptions={tabBarOptions}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => <TabIcon imageSource={tab.image} color={color} title={tab.title} />,
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabImage: {
    width: 22, 
    height: 22,
  },
  tabLabel: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 4,
  },
});
