import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import IIcon from "react-native-vector-icons/Ionicons";
import { Link } from "react-router-native";

const Footer = () => {
	return (
		<View style={styles.footer}>
			<Link to="/" style={styles.footerIcon} underlayColor="none">
				<View style={styles.footerItem}>
					<Icon name="home" size={30} />
					<Text style={styles.footerIconText}>Home</Text>
				</View>
			</Link>
			<Link to="/classes" style={styles.footerIcon} underlayColor="none">
				<View style={styles.footerItem}>
					<FIcon name="list-alt" size={30} />
					<Text style={styles.footerIconText}>Classes</Text>
				</View>
			</Link>
			<Link to="/search" style={styles.footerIcon} underlayColor="none">
				<View style={styles.footerItem}>
					<FIcon name="search" size={30} />
					<Text style={styles.footerIconText}>Search</Text>
				</View>
			</Link>
			{/* <Link
				to="/challenges"
				style={styles.footerIcon}
				underlayColor="none"
			>
				<View style={styles.footerItem}>
					<F5Icon name="dumbbell" size={30} />
					<Text style={styles.footerIconText}>Challenges</Text>
				</View>
			</Link>
			<Link to="/settings" style={styles.footerIcon} underlayColor="none">
				<View style={styles.footerItem}>
					<IIcon name="settings" size={30} />
					<Text style={styles.footerIconText}>Settings</Text>
				</View>
			</Link> */}
			<View style={styles.footerIcon} underlayColor="none">
				<View style={styles.footerItem}>
					<F5Icon name="dumbbell" size={30} />
					<Text style={styles.footerIconText}>Challenges</Text>
				</View>
			</View>
			<View style={styles.footerIcon} underlayColor="none">
				<View style={styles.footerItem}>
					<IIcon name="settings" size={30} />
					<Text style={styles.footerIconText}>Settings</Text>
				</View>
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
	footerItem: {
		alignItems: "center",
	},
});
