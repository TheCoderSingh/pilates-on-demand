import React from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Link } from "react-router-native";
import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";

const deviceWidth = Dimensions.get("window").width;

const Register = () => {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ alignItems: "center" }}>
				<Image source={logo} style={styles.logo} />
				<TextInput placeholder="First Name" />
				<TextInput placeholder="Last Name" />
				<TextInput placeholder="Address Line 1" />
				<TextInput placeholder="Address Line 2" />
				<TextInput placeholder="City" />
				<TextInput placeholder="State/Province" />
				<TextInput placeholder="Country" />
				<TextInput placeholder="ZIP/Postal Code" />
				<TextInput placeholder="Username" />
				<TextInput placeholder="Email" />
				<TextInput placeholder="Password" />
				<TextInput placeholder="Confirm Password" />

				<TouchableOpacity>
					<Text>Sign In</Text>
				</TouchableOpacity>
				<Text>Already a member?</Text>
				<Link to="/sign-in">
					<Text>Sign In</Text>
				</Link>
			</ScrollView>
			<Footer />
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	logo: {
		marginTop: 50,
		width: deviceWidth - 100,
		resizeMode: "contain",
	},
});
