import { Image, StyleSheet, Text, View } from "react-native";

import "../global.css";

export default function Rewards() {
    return (
        <View className="flex flex-col px-4 pt-6 bg-white">
            <Text className="uppercase font-bebas font-bold text-2xl text-gray-800 mb-6">
                REWARDS
            </Text>

            <Text className="font-bebas text-xl text-gray-400">
            Your savings
            </Text>

            <View className="flex-row justify-between items-center">
                {/* Energy Indicator */}
                <View className="flex-col items-center">
                    <View style={styles.stackContainer}>
                        <Image
                            source={require('../assets/images/energy.gif')}
                            style={styles.gifImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.percentageText}>10%</Text>
                    </View>
                    <Text className="uppercase font-bebas font-bold text-md text-gray-800">
                        ENERGY
                    </Text>
                </View>

                {/* Water Indicator */}
                <View className="flex-col items-center">
                    <View style={styles.stackContainer}>
                        <Image
                            source={require('../assets/images/water.gif')}
                            style={styles.gifImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.percentageText}>5%</Text>
                    </View>
                    <Text className="uppercase font-bebas font-bold text-md text-gray-800">
                        WATER
                    </Text>
                </View>

                {/* Group Saving Indicator */}
                <View className="flex-col items-center">
                    <View style={styles.stackContainer}>
                        <Image
                            source={require('../assets/images/group-saving.gif')}
                            style={styles.gifImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.percentageText}>20%</Text>
                    </View>
                    <Text className="uppercase font-bebas font-bold text-md text-gray-800">
                        GROUP SAVING
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    stackContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        marginBottom: 8,
    },
    gifImage: {
        width: 120,
        height: 120,
        position: 'absolute',
    },
    percentageText: {
        fontFamily: 'BebasNeue_400Regular',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#374151',
        textAlign: 'center',
        zIndex: 1,
    },
});