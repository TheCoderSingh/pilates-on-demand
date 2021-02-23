import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import IIcon from "react-native-vector-icons/Ionicons";

const Footer = () => {
	return (
		<View style={styles.footer}>
			<View style={styles.footerIcon}>
				<Icon name="home" size={30} />
				<Text style={styles.footerIconText}>Home</Text>
			</View>
			<View style={styles.footerIcon}>
				<FIcon name="list-alt" size={30} />
				<Text style={styles.footerIconText}>Classes</Text>
			</View>
			<View style={styles.footerIcon}>
				<SLIcon name="screen-desktop" size={30} />
				<Text style={styles.footerIconText}>Series</Text>
			</View>
			<View style={styles.footerIcon}>
				<F5Icon name="dumbbell" size={30} />
				<Text style={styles.footerIconText}>Challenges</Text>
			</View>
			<View style={styles.footerIcon}>
				<IIcon name="settings" size={30} />
				<Text style={styles.footerIconText}>Settings</Text>
			</View>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({
	footer: {
		backgroundColor: "#F9F9F9",
		height: 90,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	footerIcon: {
		alignItems: "center",
		marginTop: 7,
	},
	footerIconText: {
		fontSize: 12,
	},
});
