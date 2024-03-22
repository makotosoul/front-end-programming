import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import React from "react";
import Home from "./Home.jsx";
import Error from "./Error.jsx";
import ToDoList from "./ToDoList.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
	const [value, setValue] = React.useState(0);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	return (
		<BrowserRouter>
			<Tabs value={value} onChange={handleChange}>
				<Tab label="Home" component={Link} to="/" />
				<Tab label="My To Do List" component={Link} to="/ToDoList" />
			</Tabs>
			<Routes>
				<Route path="/" exact Component={Home} />
				<Route path="/ToDoList" exact Component={ToDoList} />
				<Route Component={Error} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
