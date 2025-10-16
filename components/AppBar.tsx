import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import "../global.css";

export default function AppBar() {
  return (
    <View className="flex-row justify-between items-center px-4 py-4 bg-white">
      <Text className="text-2xl font-bebas font-bold" style={{ color: '#14B8A6' }}>
        ZEDDI
      </Text>
      <TouchableOpacity>
        <Ionicons name="bag-outline" size={24} color="#374151" />
      </TouchableOpacity>
    </View>
  );
}