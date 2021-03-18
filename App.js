import React, { useEffect } from "react";
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Challenges from "./components/Challenges/Challenges";
import Classes from "./components/Classes/Classes";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Settings from "./components/Settings/Settings";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Video from "./Video/Video";
import CategoryResult from "./components/CategoryResult";
import * as Permissions from "expo-permissions";

export default function App() {
	useEffect(() => {
		registerForPushNotifications();
	}, []);

	const registerForPushNotifications = async () => {
		try {
			const permission = await Permissions.askAsync(
				Permissions.NOTIFICATIONS
			);
			if (!permission.granted) return;
			const token = await Notifications.getExpoPushTokenAsync();
			console.log(token);
		} catch (error) {
			console.log("Error getting a token", error);
		}
	};

	return (
		<NativeRouter>
			<View style={{ flex: 1 }}>
				<Route exact path="/" component={Settings} />
				<Route path="/home/:loggedin/:id" component={Home} />
				<Route path="/classes" component={Classes} />
				<Route path="/search" component={Search} />
				<Route path="/video/:id" component={Video} />
				<Route path="/challenges" component={Challenges} />
				<Route path="/settings" component={Settings} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/register" component={Register} />
				<Route path="/category/:cat" component={CategoryResult} />
			</View>
		</NativeRouter>
	);
}
