import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBubble({ message }) {
  const isUser = message.sender === 'user';
  return (
    <View
      style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.aiBubble
      ]}
    >
      <Text style={{ color: isUser ? '#fff' : '#000' }}>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    borderRadius: 15
  },
  userBubble: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end'
  },
  aiBubble: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start'
  }
});
