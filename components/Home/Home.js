import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ScrollView,
	Image,
	Button,
	TouchableOpacity,
} from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import group from "../../assets/group.jpg";
import pilates from "../../assets/pilates.png";
import yoga from "../../assets/yoga.png";
import barre from "../../assets/barre.png";
import meditation from "../../assets/meditation.png";
import modified from "../../assets/modified.png";
import prenatal from "../../assets/prenatal.png";
import postnatal from "../../assets/postnatal.png";
import pelvic from "../../assets/pelvic.png";

const deviceWidth = Dimensions.get("window").width;

const Home = () => {
	// const [videos, setVideos] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get("http://10.0.0.225:3000/videos")
	// 		.then((response) => {
	// 			// console.log(response);
	// 			setVideos(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	return (
		// <ScrollView>
		// 	{videos.map((video) => {
		// 		if (
		// 			video.privacy.embed === "public" &&
		// 			video.duration !== 0 &&
		// 			video.privacy.view !== "nobody"
		// 		) {
		// 			return (
		// 				<View
		// 					style={styles.container}
		// 					key={video.uri.substring(8)}
		// 				>
		// 					<WebView
		// 						source={{
		// 							html: video.embed.html,
		// 							headers: {
		// 								Referer: "exp://10.0.0.225:19000",
		// 							},
		// 						}}
		// 						style={styles.video}
		// 					/>
		// 				</View>
		// 			);
		// 		}
		// 	})}
		// </ScrollView>
		<View style={{ flex: 1 }}>
			<ScrollView style={styles.contentCont}>
				<Image source={logo} style={styles.logo} />
				<Image source={group} style={styles.image} />
				<View style={styles.text}>
					<Text>MOVEMENT THAT WORKS BEST FOR YOU</Text>
					<Text>Online classes for Every BODY</Text>
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>
							Try 14 days for free
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Sign In</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.text}>
					<Text>CLASSES THAT FIT YOU</Text>
					<Text>ANYWHERE. ANYTIME. ANY SKILL LEVEL.</Text>
				</View>
				<View style={styles.categories}>
					<View style={styles.category}>
						<Image source={pilates} style={styles.categoryImage} />
					</View>
					<View style={styles.category}>
						<Image source={yoga} style={styles.categoryImage} />
					</View>
					<View style={styles.category}>
						<Image source={barre} style={styles.categoryImage} />
					</View>
					<View style={styles.category}>
						<Image
							source={meditation}
							style={styles.categoryImage}
						/>
					</View>
					<View style={styles.category}>
						<Image source={modified} style={styles.categoryImage} />
					</View>
					<View style={styles.category}>
						<Image source={prenatal} style={styles.categoryImage} />
					</View>
					<View style={styles.category}>
						<Image
							source={postnatal}
							style={styles.categoryImage}
						/>
					</View>
					<View style={styles.category}>
						<Image source={pelvic} style={styles.categoryImage} />
					</View>
				</View>
			</ScrollView>
			<Footer />
		</View>
	);
};

const styles = StyleSheet.create({
	// container: {
	// 	width: deviceWidth,
	// 	height: 300,
	// 	alignItems: "center",
	// },
	// video: {
	// 	marginTop: 50,
	// 	width: 320,
	// },
	contentCont: {
		marginTop: 50,
	},
	logo: {
		width: 300,
		resizeMode: "contain",
		alignSelf: "center",
	},
	image: {
		height: 250,
		resizeMode: "contain",
		alignSelf: "center",
	},
	text: {
		alignItems: "center",
		marginTop: 20,
	},
	buttons: {
		alignSelf: "center",
		marginTop: 10,
	},
	button: {
		borderColor: "#EFA7A1",
		borderWidth: 1,
		padding: 20,
		borderRadius: 50,
		width: 250,
		alignItems: "center",
		marginTop: 30,
	},
	buttonText: {
		color: "#EFA7A1",
	},
	categories: {
		justifyContent: "center",
		marginTop: 30,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	category: {
		margin: 15,
	},
});

export default Home;
