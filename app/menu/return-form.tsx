import { ActionButton } from "@/components/custom/action-button";
import { FormFieldWithIcon } from "@/components/custom/form-field-with-icon";
import { Text, View } from "react-native";

export default function RenvoiFormulaireScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 px-4 pt-8 flex flex-col gap-5 justify-start">
        <View className="bg-accent rounded-2xl p-6 ">
          <Text className="text-background text-lg mb-2 font-semibold">
            Voulez-vous renvoyer un formulaire?
          </Text>
          <Text className="text-background text-base">
            1. Scannez le formulaire, dûment complété et signé, et
            enregistrez-le comme fichier PDF, JPEG, GIF ou PNG.{"\n"}
            2. Complétez le code-barres{"\n"}
            3. Chargez le fichier via “Choisissez un fichier”.{"\n"}
            4. envoyez le document
          </Text>
        </View>
        <FormFieldWithIcon
          title="Code-barres"
          icon="barcode"
          placeholder="IIII"
        />
        <FormFieldWithIcon
          title="Document"
          icon="cloud-upload-outline"
          placeholder="Choisissez un fichier"
        />
        <ActionButton icon="camera-outline" onPress={() => {}}>
          Prendre une photo
        </ActionButton>
      </View>
      <View className="px-4 pb-8 flex flex-col gap-4">
        <ActionButton icon="send" onPress={() => {}}>
          Envoyer
        </ActionButton>
        <ActionButton
          icon="delete-outline"
          onPress={() => {}}
          className="bg-gray-300 text-white"
          disabled
        >
          Supprimer
        </ActionButton>
      </View>
    </View>
  );
}
