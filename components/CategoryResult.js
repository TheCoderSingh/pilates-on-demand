import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Footer from "./Footer/Footer";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { Link } from "react-router-native";

const deviceWidth = Dimensions.get("window").width;

const CategoryResult = (props) => {
	const [videos, setVideos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(
				`http://10.0.0.225:3000/search-videos/${props.match.params.cat}`
			)
			.then((response) => {
				setVideos(response.data);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.backArea}>
				<Link to="/home">
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Icon name="chevron-back-outline" size={30} />
						<Text style={styles.backTxt}>Home</Text>
					</View>
				</Link>
			</View>
			<ScrollView contentContainerStyle={{ alignItems: "center" }}>
				<Text style={styles.categoryName}>
					{props.match.params.cat}
				</Text>
				<View style={styles.videos}>
					{isLoading ? (
						<View>
							<ActivityIndicator size="large" color="#00ff00" />
							<Text style={{ marginTop: 20 }}>
								Loading Videos...
							</Text>
						</View>
					) : (
						videos.map((video) => {
							return (
								<Link
									to={"video/" + video.uri.substring(8)}
									key={video.uri.substring(8)}
								>
									<View
										key={video.uri.substring(8)}
										style={styles.video}
									>
										<Image
											source={{
												uri: video.pictures.sizes[4].link.slice(
													0,
													-6
												),
											}}
											style={styles.thumbnail}
										/>
										<Text>{video.name}</Text>
									</View>
								</Link>
							);
						})
					)}
				</View>
			</ScrollView>
			<Footer />
		</View>
	);
};

export default CategoryResult;

const styles = StyleSheet.create({
	backArea: {
		backgroundColor: "#efefef",
		paddingTop: 50,
		justifyContent: "center",
		paddingBottom: 5,
	},
	backTxt: {
		fontSize: 18,
	},
	categoryName: {
		fontSize: 24,
		textTransform: "capitalize",
		marginTop: 10,
	},
	videos: {
		marginTop: 30,
	},
	video: {
		maxHeight: 300,
		width: deviceWidth - 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 6,
		marginBottom: 60,
	},
	videoText: {
		color: "#fff",
	},
	thumbnail: {
		height: "100%",
		width: "100%",
		marginBottom: 10,
	},
});
