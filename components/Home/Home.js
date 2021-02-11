import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";

const deviceWidth = Dimensions.get("window").width;

const Home = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		axios
			.get("http://10.0.0.225:3000/videos")
			.then((response) => {
				// console.log(response);
				setVideos(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<ScrollView>
			{videos.map((video) => {
				if (
					video.privacy.embed === "public" &&
					video.duration !== 0 &&
					video.privacy.view !== "nobody"
				) {
					console.log(video.link);
					return (
						<View
							style={styles.container}
							key={video.uri.substring(8)}
						>
							<WebView
								source={{
									html: video.embed.html,
									headers: {
										Referer: "exp://10.0.0.33:19000",
									},
								}}
								style={styles.video}
							/>
						</View>
					);
				}
			})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: deviceWidth,
		height: 300,
		alignItems: "center",
	},
	video: {
		marginTop: 50,
		width: 320,
	},
});

export default Home;
