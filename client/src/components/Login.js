import React, { forwardRef } from "react";
import styled from "styled-components/macro";
// import components
import { UncontrolledTooltip } from "reactstrap";
import Identicon from "react-identicons";
import MediumEditor from "react-medium-editor";
// import styles
import "../App.css";

//**************
// component
//**************

const Login = forwardRef(({ loginUser }, ref) => {
	const onSubmit = (event) => {
		event.preventDefault();

		loginUser(ref.current.value.trim());
	};

	return (
		<Container>
			<div className="account__wrapper">
				<div className="account__card">
					<div className="account__profile">
						<Identicon
							className="account__avatar"
							size={64}
							string="randomness"
						/>
						<p className="account__name">Hello, user!</p>
						<p className="account__sub">Join to edit the document</p>
					</div>
					<form onSubmit={onSubmit}>
						<input name="username" ref={ref} className="form-control" />
						<button
							type="submit"
							className="btn btn-primary account__btn"
						>
							Join
						</button>
					</form>
				</div>
			</div>
		</Container>
	);
});
export default Login;

//**************
// styles
//**************

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	overflow-y: auto;
	background: #eee;
`;
