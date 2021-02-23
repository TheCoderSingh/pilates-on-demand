import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TextInput,
	ScrollView,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Footer from "../Footer/Footer";
import SectionHead from "../SectionHead";
import pelvic from "../../assets/pelvic2.png";
import hip from "../../assets/hip.png";
import morning from "../../assets/morning.png";

const deviceWidth = Dimensions.get("window").width;

const Classes = () => {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView
				contentContainerStyle={{ alignItems: "center" }}
				style={styles.container}
			>
				<View style={styles.header}>
					<Text style={styles.headerText}>Classes</Text>
					<View style={styles.textInput}>
						<TextInput style={styles.headerInput}>Filter</TextInput>
						<Icon
							name="arrow-alt-circle-down"
							style={styles.arrowIcon}
							size={20}
						/>
					</View>
				</View>
				<View style={styles.featured}>
					<SectionHead text="Featured Class" />
					<Image source={pelvic} style={styles.featImage} />
					<Text>Pelvic Floor and Arms</Text>
				</View>
				<View style={styles.trending}>
					<SectionHead text="Trending Classes" />
					<TouchableOpacity style={styles.seeMore}>
						<Text>See More &gt;&gt;</Text>
					</TouchableOpacity>
					<Image source={hip} style={styles.imageTrending} />
					<Image source={morning} style={styles.imageTrending} />
				</View>
				<View style={styles.classes}>
					<SectionHead text="Classes By Level" />
					<TouchableOpacity style={styles.button}>
						<Text style={styles.classesText}>Beginners</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.classesText}>Intermediate</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.classesText}>Advanced</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<Footer />
		</View>
	);
};

export default Classes;

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
		right: 10,
		top: 7,
		color: "#EFA7A1",
	},
	featured: {
		alignItems: "center",
	},
	featImage: {
		marginTop: 20,
		marginBottom: 10,
	},
	trending: {
		alignItems: "center",
	},
	seeMore: {
		alignSelf: "flex-end",
		marginTop: 10,
		marginRight: 15,
		marginBottom: 20,
	},
	imageTrending: {
		marginVertical: 10,
	},
	classes: {
		alignItems: "center",
	},
	button: {
		marginTop: 20,
		borderWidth: 1,
		width: deviceWidth - 160,
		height: 50,
		borderRadius: 50,
		justifyContent: "center",
		borderColor: "#EFA7A1",
	},
	classesText: {
		textAlign: "center",
		color: "#EFA7A1",
	},
});
