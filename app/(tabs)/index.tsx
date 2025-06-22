// HomeScreen.tsx
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
   <SafeAreaView className="flex-1 p-8">
      <View className="  ">
        <Text className="text-3xl font-bold text-gray-900 mb-4">
          Welcome Back 👋
        </Text>

        <Text className="text-lg text-gray-700 mb-4">Its Home Screen!</Text>
      </View>
    </SafeAreaView>
  );
}
