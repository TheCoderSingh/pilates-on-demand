import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";
import Footer from "../components/Footer/Footer";

const deviceWidth = Dimensions.get("window").width;

const Video = (props) => {
	const [video, setVideo] = useState();

	useEffect(() => {
		let videoid = props.match.params.id;

		axios
			.get(`http://10.0.0.225:3000/video/${videoid}`)
			.then((response) => {
				setVideo(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ alignItems: "center" }}>
				{video ? (
					<View style={styles.video}>
						<Text style={styles.name}>{video.name}</Text>
						<Text style={styles.desc}>{video.description}</Text>
						<WebView
							source={{
								html: video.embed.html
									.replace("1920", "1024")
									.replace("1080", "786"),
							}}
							scrollEnabled={false}
							style={{ marginTop: 20, width: 320, height: 230 }}
						/>
					</View>
				) : null}
			</ScrollView>
			<Footer />
		</View>
	);
};

export default Video;

const styles = StyleSheet.create({
	video: {
		marginTop: 60,
		height: 600,
		width: deviceWidth,
		alignItems: "center",
	},
	videoRes: {
		width: deviceWidth,
	},
	name: {
		fontSize: 24,
		color: "#EFA7A1",
	},
	desc: {
		textAlign: "center",
		marginTop: 10,
	},
});
