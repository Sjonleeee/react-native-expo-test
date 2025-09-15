import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

export default function ProfilePage() {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-6">
      {/* Logo Section */}
      <Image
        source={require("@/assets/images/react-logo.png")}
        className="w-32 h-32 mb-4"
      />
      <Text className="text-xl font-bold text-gray-800 mb-2">MYFAMIRIS</Text>
      <Text className="text-center text-gray-600 mb-6">
        Les allocations familiales pour tous les bruxellois
      </Text>

      {/* Access Code Section */}
      <TouchableOpacity className="flex-row items-center bg-white border border-gray-300 rounded-full px-4 py-2 mb-6">
        <Image
          source={require("@/assets/images/icon.png")}
          className="w-6 h-6 mr-2"
        />
        <Text className="text-blue-500 font-bold">www.myfamifed.be</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-600 mb-4">
        Connectez-vous avec votre numéro de registre national (NISS)
      </Text>

      {/* NISS Input Section */}
      <TextInput
        placeholder="63.56.12-411.22"
        className="w-full bg-white border border-gray-300 rounded-full px-4 py-2 mb-4 text-center text-gray-800"
      />

      {/* Code Input Section */}
      <View className="flex-row justify-center space-x-2 mb-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            placeholder=""
            className="w-12 h-12 bg-white border border-gray-300 rounded text-center text-gray-800"
          />
        ))}
      </View>

      {/* Buttons Section */}
      <TouchableOpacity className="bg-blue-500 w-full rounded-full py-3 mb-4">
        <Text className="text-center text-white font-bold">Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-gray-300 w-full rounded-full py-3 mb-6">
        <Text className="text-center text-gray-800 font-bold">
          Se connecter avec itsme
        </Text>
      </TouchableOpacity>

      {/* Language Switch Section */}
      <View className="flex-row justify-center space-x-4">
        <Text className="text-gray-600">NL</Text>
        <Text className="text-gray-800 font-bold">FR</Text>
      </View>
    </View>
  );
}
