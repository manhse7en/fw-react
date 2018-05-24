import React from "react";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
	return (
		<div>
			<h3>Header</h3>
			{renderRoutes(route.routes)}
			<h3>Footer</h3>
		</div>
	);
};

export default {
	component: App
}