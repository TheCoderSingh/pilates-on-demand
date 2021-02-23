import React from "react";
import { View } from "react-native";
import Classes from "./components/Classes/Classes";
import Home from "./components/Home/Home";

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			{/* <Home /> */}
			<Classes />
		</View>
	);
}
