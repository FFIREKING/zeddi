import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

// Import images
const otaruImage = require('../assets/images/otaru.png');
const braaiImage = require('../assets/images/braai.png');

// Mock data for restaurants
const restaurants = [
  {
    id: '1',
    name: 'OTARU',
    deliveryFee: '€3.99',
    rating: 5.2,
    reviewCount: 2500,
    deliveryTime: '8 min',
    image: otaruImage,
  },
  {
    id: '2',
    name: 'BRAAI',
    deliveryFee: '€5.99',
    rating: 3.2,
    reviewCount: 2700,
    deliveryTime: '10 min',
    image: braaiImage,
  },
];

export default function ResturantNearYou() {
    const renderRestaurantCard = (restaurant: typeof restaurants[0]) => (
        <TouchableOpacity 
            key={restaurant.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 mr-4"
            style={{ width: 280 }}
        >
            <Image 
                source={restaurant.image} 
                className="w-full h-40 rounded-t-xl"
                resizeMode="cover"
            />
            <View className="p-4">
                <Text className="font-bebas font-bold text-xl text-gray-800 mb-2">
                    {restaurant.name}
                </Text>
                <Text className="text-gray-600 text-sm mb-3">
                    {restaurant.deliveryFee} Delivery fee
                </Text>
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Text className="font-bebas font-bold text-sm text-gray-800">
                            {restaurant.rating}
                        </Text>
                        <Ionicons name="star" size={14} color="#FFD700" className="ml-1" />
                        <Text className="text-gray-500 text-xs ml-1">
                            ({restaurant.reviewCount}+)
                        </Text>
                        <Text> • </Text>
                        <Text className="text-black text-sm font-bold">
                            {restaurant.deliveryTime}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="flex flex-col px-4 pt-14 bg-white">
            <Text className="uppercase font-bebas font-bold text-2xl text-gray-800 mb-6">
                RESTAURANT NEAR YOU
            </Text>
            
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
            >
                {restaurants.map(renderRestaurantCard)}
            </ScrollView>
        </View>
    );
}
