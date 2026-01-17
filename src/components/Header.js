import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context"

export default function Header() {
    const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop : insets.top}}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Thông báo</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
