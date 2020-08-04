import React, { forwardRef } from "react";
import styled from "styled-components/macro";
// import components
import { Card } from "reactstrap";
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
			<StyledCard>
				<Profile>
					<Avatar size={64} string="randomness" />
					<Name>Hello, user!</Name>
					<Sub>Join to edit the document</Sub>
				</Profile>
				<form onSubmit={onSubmit}>
					<input name="username" ref={ref} className="form-control" />
					<button type="submit" className="btn btn-primary account__btn">
						Join
					</button>
				</form>
			</StyledCard>
		</Container>
	);
});
export default Login;

//**************
// styles
//**************

const Avatar = styled(Identicon)`
	height: 4rem;
	width: 4rem;
	border-radius: 50%;
	overflow: hidden;
`;
const Container = styled.div`
	display: grid;
	align-content: center;
	height: 100%;
	width: 100%;
	background: #eee;
`;
const Name = styled.p`
	font-size: 0.75rem;
	text-transform: uppercase;
	font-weight: 700;
	line-height: 1rem;
	margin: 0.25rem 0 0.25rem 0;
`;
const Profile = styled.div`
	text-align: center;
`;
const StyledCard = styled(Card)`
	/* will keep width without squishing like justify-content in parent */
	justify-self: center;
	width: calc(100% - 1rem);
	max-width: 30rem;
	padding: 3rem 4rem;
	background-color: #fff;
`;
const Sub = styled.p`
	margin-top: 0;
	margin-bottom: 0.75rem;
	color: #656262;
	font-size: 0.75rem;
	line-height: 1rem;
`;
