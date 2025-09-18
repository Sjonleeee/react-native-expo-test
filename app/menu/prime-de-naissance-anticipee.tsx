import { ActionButton } from "@/components/custom/action-button";
import { FormFieldWithIcon } from "@/components/custom/form-field-with-icon";
import { Text, View } from "react-native";

export default function PrimeDeNaissanceAnticipeeScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 px-6 pt-16 flex flex-col gap-5 justify-start">
        <Text className="text-lg text-foreground mb-48">
          Pour une prime de naissance anticipée, il suffit de nous envoyer
          l’attestation de votre médecin ou sage-femme. Veuillez prendre une
          photo de ce document
        </Text>
        <FormFieldWithIcon
          title="Document"
          icon="cloud-upload-outline"
          placeholder="Choisissez un fichier"
          className="mb-0"
        />
        <ActionButton icon="camera-outline" onPress={() => {}}>
          Prendre une photo
        </ActionButton>
      </View>
    </View>
  );
}
