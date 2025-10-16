import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";

import AppBar from '../components/AppBar';
import Rewards from '../components/Rewards';

export default function RewardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 flex-col">
          <AppBar />
          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <Rewards />
          </ScrollView>
        </View>
    </SafeAreaView>
  );
}