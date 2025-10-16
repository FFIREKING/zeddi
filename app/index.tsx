import "../global.css";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBar from '../components/AppBar';
import EnvironmentImpact from '../components/EnvironmentImpact';
import ResturantNearYou from '../components/ResturantNearYou';
import ReferFriends from '../components/ReferFriends';

export default function HomeScreen() {

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 flex-col">
          <AppBar />
          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <EnvironmentImpact />
            <ResturantNearYou />
            <ReferFriends />
          </ScrollView>
        </View>
    </SafeAreaView>
  );
}