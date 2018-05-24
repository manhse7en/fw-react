import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			}
		]
	}
];