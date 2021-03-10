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
				<TextInput placeholder="First Name" style={styles.input} />
				<TextInput placeholder="Last Name" style={styles.input} />
				<TextInput placeholder="Address Line 1" style={styles.input} />
				<TextInput placeholder="Address Line 2" style={styles.input} />
				<TextInput placeholder="City" style={styles.input} />
				<TextInput placeholder="State/Province" style={styles.input} />
				<TextInput placeholder="Country" style={styles.input} />
				<TextInput placeholder="ZIP/Postal Code" style={styles.input} />
				<TextInput placeholder="Username" style={styles.input} />
				<TextInput placeholder="Email" style={styles.input} />
				<TextInput placeholder="Password" style={styles.input} />
				<TextInput
					placeholder="Confirm Password"
					style={styles.input}
				/>

				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnTxt}>Register</Text>
				</TouchableOpacity>
				<Text>Already a member?</Text>
				<Link to="/sign-in" style={styles.btn}>
					<Text style={styles.btnTxt}>Sign In</Text>
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
		marginBottom: 30,
		marginTop: 20,
	},
	btnTxt: {
		color: "#fff",
	},
});
