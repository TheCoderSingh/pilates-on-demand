import React from "react";
import {
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Footer from "../Footer/Footer";
import SectionHead from "../SectionHead";

const deviceWidth = Dimensions.get("window").width;

const Search = () => {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView
				contentContainerStyle={{ alignItems: "center" }}
				style={styles.container}
			>
				<View style={styles.header}>
					<Text style={styles.headerText}>Search</Text>
					<View style={styles.textInput}>
						<TextInput
							style={styles.headerInput}
							placeholder="Search Videos"
						/>
						<Icon
							name="search"
							style={styles.arrowIcon}
							size={15}
						/>
					</View>
				</View>
				<View style={styles.results}>
					<SectionHead text="Search Results" />
					<View style={styles.videos}>
						<View style={styles.video}>
							<Text style={styles.videoText}>Video 1</Text>
						</View>
						<View style={styles.video}>
							<Text style={styles.videoText}>Video 2</Text>
						</View>
						<View style={styles.video}>
							<Text style={styles.videoText}>Video 3</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<Footer />
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	header: {
		marginTop: 50,
		marginBottom: 15,
	},
	headerText: {
		fontSize: 24,
		color: "#EFA7A1",
		textAlign: "center",
		marginBottom: 20,
	},
	headerInput: {
		borderRadius: 50,
		borderWidth: 1,
		width: deviceWidth - 60,
		height: 35,
		paddingLeft: 20,
		fontSize: 18,
		color: "#EFA7A1",
	},
	textInput: {
		position: "relative",
	},
	arrowIcon: {
		position: "absolute",
		right: 12,
		top: 8,
		color: "#EFA7A1",
	},
	results: {
		alignItems: "center",
	},
	resultsText: {
		fontSize: 24,
		marginBottom: 15,
		marginTop: 20,
	},
	videos: {
		marginTop: 30,
	},
	video: {
		height: 70,
		width: deviceWidth - 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 6,
		marginBottom: 15,
		backgroundColor: "#EFA7A1",
	},
	videoText: {
		color: "#fff",
	},
});
