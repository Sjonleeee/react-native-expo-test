import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AuthScreen({ onLogin }: { onLogin: () => void }) {
  const [niss, setNiss] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  return (
    <View className="flex-1 bg-[#F3F7FA] items-center justify-center px-6">
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{
          width: 120,
          height: 60,
          resizeMode: "contain",
          marginBottom: 24,
        }}
      />
      <Text className="text-center text-[#1A3365] text-lg font-bold mb-2">
        Les allocations familiales pour tous les bruxellois
      </Text>
      <View className="my-4 w-full items-center">
        <Text className="text-center text-[#1A3365] mb-2">
          Pour obtenir votre code d’accès connectez-vous sur
        </Text>
        <TouchableOpacity className="flex-row items-center border rounded-full px-4 py-2 mb-2 border-[#1A3365]">
          <MaterialCommunityIcons name="web" size={20} color="#1A3365" />
          <Text className="ml-2 text-[#1A3365] font-semibold">
            www.myfamifed.be
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center text-[#1A3365] mb-2">
        Connectez-vous avec votre numéro de register nationale (NISS)
      </Text>
      <TextInput
        className="w-full border rounded-full px-4 py-3 mb-4 border-[#1A3365] text-[#1A3365] text-center"
        placeholder="63.56.12-411.22"
        value={niss}
        onChangeText={setNiss}
        keyboardType="numeric"
      />
      <View className="flex-row justify-center mb-4">
        {code.map((c, i) => (
          <TextInput
            key={i}
            className="w-10 h-12 border rounded-lg mx-1 text-center text-lg border-[#1A3365]"
            maxLength={1}
            value={c}
            onChangeText={(v) => {
              const newCode = [...code];
              newCode[i] = v;
              setCode(newCode);
            }}
          />
        ))}
      </View>
      <TouchableOpacity
        className="flex-row items-center justify-center bg-[#1A3365] rounded-full py-4 w-full mb-3"
        onPress={onLogin}
      >
        <MaterialCommunityIcons name="link" size={20} color="#1ED9B6" />
        <Text className="ml-2 text-white font-semibold">Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center justify-center border rounded-full py-4 w-full mb-3 border-[#E5E7EB]">
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        <Text className="text-[#1A3365] font-semibold">
          Se connecter avec itsme
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-center mt-2">
        <Text className="text-[#1A3365] mr-4">NL</Text>
        <Text className="text-[#1A3365] font-bold underline">FR</Text>
      </View>
    </View>
  );
}
