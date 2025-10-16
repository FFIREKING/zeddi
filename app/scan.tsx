import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';

import "../global.css";

export default function ScanScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 flex-col">
        <AppBar />
        <View className="flex-1 px-6 py-8">
          {/* Header */}
          <View className="mb-6">
            <Text className="font-bebas font-bold text-2xl text-gray-800 uppercase mb-2">
              SCAN AND RETURN
            </Text>
            <Text className="text-gray-600 text-lg ml-2">
              Scan the container and earn points!
            </Text>
          </View>

        {/* Scanner View Placeholder */}
        <View className="flex-1 justify-center items-center">
          <View 
            className="bg-gray-100 rounded-2xl border-2 border-blue-500"
            style={{
              width: '100%',
              height: '70%',
              minHeight: 400,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500 text-lg font-medium">
                Scanner View
              </Text>
              <Text className="text-gray-400 text-sm mt-2">
                Position container in frame
              </Text>
            </View>
          </View>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}