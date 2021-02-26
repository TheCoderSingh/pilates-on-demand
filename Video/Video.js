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
				console.error(error);
			});
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<Text>{props.match.params.id}</Text>
				<View style={{ flex: 1 }}>
					{video ? (
						<WebView
							source={{
								html: video.embed.html,
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

const styles = StyleSheet.create({});
