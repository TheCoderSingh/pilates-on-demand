import React from "react";
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Classes from "./components/Classes/Classes";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";

export default function App() {
	return (
		<NativeRouter>
			<View style={{ flex: 1 }}>
				<Route exact path="/" component={Home} />
				<Route path="/classes" component={Classes} />
				<Route path="/search" component={Search} />
			</View>
		</NativeRouter>
	);
}
