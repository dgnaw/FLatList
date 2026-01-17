import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BottomTab() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.bottomNav, 
      { 
        height: 60 + insets.bottom, 
        paddingBottom: insets.bottom 
      }
    ]}>
      <View style={styles.navItem}>
        <MaterialIcons name="home" size={24} color="#aaa" />
        <Text style={styles.navText}>Trang chủ</Text>
      </View>
      <View style={styles.navItem}>
        <Entypo name="direction" size={24} color="#aaa" />
        <Text style={styles.navText}>Khám phá</Text>
      </View>

      <View style={styles.centerButtonContainer}>
        <TouchableOpacity style={styles.centerButton}>
          <AntDesign name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.navItem}>
        <View style={styles.activeDot} />
        <AntDesign name="bell" size={24} color="#3b5998" />
        <Text style={[styles.navText, { color: '#3b5998' }]}>Thông báo</Text>
      </View>
      <View style={styles.navItem}>
        <AntDesign name="user" size={24} color="#aaa" />
        <Text style={styles.navText}>Tài khoản</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center', 
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#aaa',
    marginTop: 2,
  },
  centerButtonContainer: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activeDot: {
    position: 'absolute',
    top: -5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    zIndex: 1,
  },
});