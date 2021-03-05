import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";
import Footer from "../components/Footer/Footer";

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
				<Text>{props.match.params.id}</Text>
				<View style={styles.video}>
					{video ? (
						<WebView
							source={{
								html: video.embed.html,
								headers: {
									Referer: "exp://10.0.0.225:19000",
								},
							}}
						/>
					) : null}
				</View>
			</ScrollView>
			<Footer />
		</View>
	);
};

export default Video;

const styles = StyleSheet.create({
	video: {
		marginTop: 60,
		height: 300,
		width: 300,
	},
});
