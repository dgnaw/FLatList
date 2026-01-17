import React from 'react';
import { StyleSheet, FlatList, StatusBar, View } from 'react-native';

import Header from './src/components/Header';
import NotificationItem from './src/components/Notification';
import BottomTab from './src/components/BottomTab';
import DATA from './src/data/MockData';
import {SafeAreaProvider}  from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Header />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <BottomTab />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 80, 
  },
});