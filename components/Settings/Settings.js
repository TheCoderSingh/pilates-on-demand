import React from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";

const deviceWidth = Dimensions.get("window").width;

const Settings = () => {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ alignItems: "center" }}>
				<Image source={logo} style={styles.logo} />
				<View
					style={{
						height: 120,
						width: 120,
						backgroundColor: "#EFA7A1",
						borderRadius: 100,
					}}
				></View>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Sign In</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Register</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.content}>
					<View style={styles.setting}>
						<Text style={styles.settingText}>
							Membership Status
						</Text>
						<Text style={styles.settingText}>Notifications</Text>
					</View>

					<View style={styles.settingRes}>
						<Text style={styles.settingText}>Not a Member Yet</Text>
						<Text style={styles.settingText}>Active</Text>
					</View>
				</View>
			</ScrollView>
			<Footer />
		</View>
	);
};

export default Settings;

const styles = StyleSheet.create({
	logo: {
		marginTop: 50,
		width: deviceWidth - 100,
		resizeMode: "contain",
	},
	buttons: {
		flexDirection: "row",
	},
	button: {
		marginTop: 30,
		padding: 15,
		borderWidth: 1,
		borderColor: "#EFA7A1",
		width: 120,
		alignItems: "center",
		marginHorizontal: 10,
	},
	buttonText: {
		color: "#EFA7A1",
	},
	content: {
		marginTop: 30,
		width: deviceWidth - 100,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	settingText: {
		marginVertical: 5,
		color: "#EFA7A1",
		fontSize: 16,
	},
});
