import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

const LANGUAGES = [
	{ label: "Français", value: "Français" },
	{ label: "English", value: "English" },
	{ label: "Nederlands", value: "Nederlands" },
];

export const LanguageModal: React.FC<{
	visible: boolean;
	onClose: () => void;
	onConfirm?: (lang: string) => void;
	onOpenProfile?: () => void;
}> = ({ visible, onClose, onConfirm, onOpenProfile }) => {
	const [selected, setSelected] = useState(LANGUAGES[0].value);

	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View style={{ flex: 1, backgroundColor: "#fff" }}>
				{/* Header - match other modals exactly */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						paddingHorizontal: 16,
						paddingVertical: 16,
						backgroundColor: "white",
						borderBottomWidth: 1,
						borderBottomColor: "#E5E7EB",
						zIndex: 10,
					}}
				>
					<TouchableOpacity
						onPress={onClose}
						style={{ alignItems: "center", justifyContent: "center" }}
						accessible={true}
						accessibilityRole="button"
						accessibilityLabel="Back"
					>
						<MaterialCommunityIcons name="arrow-left" size={28} color="#23396C" />
					</TouchableOpacity>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "600",
							color: "#23396C",
							flex: 1,
							textAlign: "center",
						}}
					>
						Langue
					</Text>
					<View style={{ alignItems: "center", justifyContent: "center" }}>
						<TouchableOpacity
							onPress={onOpenProfile}
							accessible={true}
							accessibilityRole="button"
							accessibilityLabel="Open profile"
						>
							<MaterialCommunityIcons
								name="account-circle-outline"
								size={28}
								color="#23396C"
							/>
						</TouchableOpacity>
					</View>
				</View>
				{/* Content */}
				<View
					style={{
						flex: 1,
						justifyContent: "flex-start",
						alignItems: "stretch",
						paddingHorizontal: 24,
						paddingTop: 48,
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "700",
							color: "#193B7D",
							marginBottom: 24,
						}}
					>
						Choisissez votre langue préférée
					</Text>
					{/* Custom Dropdown */}
					<View
						// css-view-g5y9jx
						style={{ borderRadius: 32 }}
					>
						<DropdownMenu
							items={LANGUAGES}
							value={selected}
							onValueChange={setSelected}
							placeholder="Choisissez"
						/>
					</View>
					<View style={{ flex: 1 }} />
					{/* Confirm Button at bottom */}
					<TouchableOpacity
						style={{
							backgroundColor: "#193B7D",
							borderRadius: 40,
							paddingVertical: 18,
							alignItems: "center",
							flexDirection: "row",
							justifyContent: "center",
							marginBottom: 32,
							width: "100%",
						}}
						onPress={() => onConfirm?.(selected)}
						activeOpacity={0.8}
					>
						<MaterialCommunityIcons
							name="content-save-outline"
							size={24}
							color="#fff"
							style={{ marginRight: 8 }}
						/>
						<Text
							style={{
								color: "#fff",
								fontSize: 18,
								fontWeight: "600",
							}}
						>
							Confirmer
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};
