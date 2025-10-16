import { View, Text, TouchableOpacity, Image } from "react-native";

export default function ReferFriends() {
    return (
        <View className="mx-4 my-6">
            <View 
                className="flex-row items-center rounded-2xl overflow-hidden shadow-lg p-6 gap-4"
                style={{ 
                    backgroundColor: '#20C997',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 5,
                }}
            >
                {/* Left Section - Text and Button (60% width) */}
                <View className="flex-1" style={{ flex: 0.6 }}>
                    <Text className="font-bebas font-bold text-xl text-gray-800 mb-4 text-left">
                        INVITE YOUR FRIENDS AND WIN THE DISCOUNT RACE AND ANOTHER REWARDS
                    </Text>
                    
                    <TouchableOpacity 
                        className="bg-gray-800 rounded-full px-6 py-3 self-start"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            elevation: 3,
                        }}
                    >
                        <Text className="font-bebas font-bold text-white text-sm uppercase">
                            REFER FRIENDS
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Right Section - Image (40% width) */}
                <View className="h-40 w-80 rounded-2xl" style={{ flex: 0.4 }}>
                    <Image 
                        source={require('../assets/images/braai.png')}
                        className="w-full h-full rounded-2xl"
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
}