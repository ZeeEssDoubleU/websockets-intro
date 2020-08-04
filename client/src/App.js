import React, { useReducer, useEffect, useRef } from "react";
import { w3cwebsocket } from "websocket";
import styled from "styled-components/macro";
// import components
import { Navbar, NavbarBrand } from "reactstrap";
import Identicon from "react-identicons";
import Editor from "./components/Editor";
import Login from "./components/Login";
// import styles
import "./App.css";

const client = new w3cwebsocket("ws://127.0.0.1:8000");

//**************
// component
//**************

export default function App() {
	const reducer = (state, action) => {
		console.log("action:", action); // ? debug
		return { ...state, ...action };
	};
	const [state, dispatch] = useReducer(reducer, {
		currentUsers: [],
		userActivity: [],
		username: null,
		text: "",
	});

	// ref to record user input for login
	const inputRef = useRef();

	useEffect(() => {
		client.onopen = () => {
			console.log("Success: websocket client connected");
		};
		client.onmessage = (message) => {
			// parse message from server
			const dataFromServer = JSON.parse(message.data);
			console.log("data from server:", dataFromServer.data); // ? debug

			// if user logged in
			if (dataFromServer.type === "userevent") {
				// update current users
				const updateCurrentUsers = Object.values(dataFromServer.data.users);
				dispatch({ currentUsers: updateCurrentUsers });
			}
			// if editor changed on server
			else if (dataFromServer.type === "contentchange") {
				// update editor (document) on client
				dispatch({
					text: dataFromServer.data.editorContentd,
				});
			}

			// update user activity on client
			dispatch({ userActivity: dataFromServer.data.userActivity });
		};
	}, []);

	const loginUser = (username) => {
		if (username) {
			// callback here, see below
			dispatch({ username }, loginUserOnServer(username));
		}
	};

	// login user on server after setting username on client (loginUser)
	// uses callback inside of dispatch (setState)
	const loginUserOnServer = (username) =>
		client.send(
			JSON.stringify({
				username,
				type: "userevent",
			}),
		);

	const onEditorStateChange = (text) => {
		client.send(
			JSON.stringify({
				type: "contentchange",
				username: state.username,
				content: text,
			}),
		);
	};

	return (
		<Container>
			<Navbar color="light" light>
				<NavbarBrand href="/">Real-time document editor</NavbarBrand>
			</Navbar>
			<Main>
				{state.username ? (
					<Editor state={state} onEditorChange={onEditorStateChange} />
				) : (
					<Login state={state} loginUser={loginUser} ref={inputRef} />
				)}
			</Main>
		</Container>
	);
}

//**************
// styles
//**************

const Container = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`;
const Main = styled.div`
	overflow: auto;
`;
