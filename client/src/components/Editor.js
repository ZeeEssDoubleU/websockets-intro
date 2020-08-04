import React from "react";
import styled from "styled-components/macro";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
// import components
import MediumEditor from "react-medium-editor";
import CurrentUsers from "./CurrentUsers";
import UserActivity from "./UserActivity";
// import styles
import "../App.css";

//**************
// component
//**************

export default function Editor({ state, onEditorStateChange }) {
	return (
		<Container>
			<Document>
				<CurrentUsers state={state} />
				<StyledEditor
					options={{
						placeholder: { text: "Start writing your document here" },
					}}
					text={state.text}
					onChange={onEditorStateChange}
				/>
			</Document>
			<UserActivity state={state} />
		</Container>
	);
}

//**************
// styles
//**************

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 300px;
	gap: 1rem;
	overflow: auto;
	height: 100%;
	padding: 1rem 4rem;
	background: #eee;
`;
const Document = styled.main`
	display: grid;
	grid-template-rows: auto 1fr;
	overflow: auto;
`;
const StyledEditor = styled(MediumEditor)`
	height: 100%;
	overflow: auto;
	outline: none;
	border: 1px solid #ccc;
	padding: 20px;
	background: #fff;
`;
