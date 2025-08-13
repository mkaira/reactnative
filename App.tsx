
import "./global.css";
import { View, Text, Button } from "react-native";
 

export default function App() {
 
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-5">
      <Text className="text-2xl font-bold text-gray-800 mb-8">
        Hello React Native
      </Text>
      {/* Card Component */}
      <View className="bg-white rounded-xl p-5 mx-5 shadow-lg w-full max-w-sm">
        <Text className="text-xl font-bold text-gray-800 mb-3">
          Welcome Card
        </Text>
        <Text className="text-base text-gray-600 leading-6 mb-4">
          This is a beautiful card component with some sample content. 
          It demonstrates how to create cards in React Native.
        </Text>
        <View className="border-t border-gray-200 pt-4">
          <Text className="text-sm text-gray-500 text-center mb-2">
            Card Footer
          </Text>
          <Button
            title="Go to Home"
            
          />
        </View>
      </View>
    </View>
  );
}
