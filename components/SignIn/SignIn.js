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

const SignIn = () => {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ alignItems: "center" }}>
				<Image source={logo} style={styles.logo} />
				<TextInput placeholder="Email" style={styles.input} />
				<TextInput placeholder="Password" style={styles.input} />
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnTxt}>Sign In</Text>
				</TouchableOpacity>

				<Text style={styles.memberTxt}>Not a member yet?</Text>
				<Link to="/register" style={styles.btn}>
					<Text style={styles.btnTxt}>Register</Text>
				</Link>
			</ScrollView>
			<Footer />
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	logo: {
		marginTop: 50,
		width: deviceWidth - 100,
		resizeMode: "contain",
	},
	input: {
		width: deviceWidth - 50,
		borderWidth: 1,
		marginVertical: 10,
		borderColor: "#EFA7A1",
		padding: 20,
	},
	btn: {
		backgroundColor: "#EFA7A1",
		width: 100,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
		marginTop: 30,
	},
	memberTxt: {
		color: "#EFA7A1",
	},
	btnTxt: {
		color: "#fff",
	},
});
