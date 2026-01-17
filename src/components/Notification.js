import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function NotificationItem({ item }) {
  const backgroundColor = item.isRead ? '#ffffff' : '#f0f8ff';

  return (
    <View style={[styles.itemContainer, { backgroundColor }]}>
      <View style={styles.iconContainer}>
        {item.type === 'check' ? (
          <View style={styles.checkIconBg}>
            <AntDesign name="check" size={18} color="#fff" />
          </View>
        ) : (
          <MaterialIcons name="group" size={28} color="#3b5998" />
        )}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  iconContainer: {
    marginRight: 15,
    justifyContent: 'flex-start',
    marginTop: 2,
  },
  checkIconBg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});