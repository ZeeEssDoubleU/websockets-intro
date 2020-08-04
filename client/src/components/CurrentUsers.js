import React from "react";
import styled from "styled-components/macro";
// import components
import { UncontrolledTooltip } from "reactstrap";
import Identicon from "react-identicons";

//**************
// component
//**************

export default function CurrentUsers({ state }) {
	return (
		<Container>
			{state.currentUsers.map((user) => (
				<>
					<UserInfo id={user} key={user}>
						<Avatar
							style={{
								backgroundColor: user.randomcolor,
							}}
							size={40}
							string={user}
						/>
					</UserInfo>
					<UncontrolledTooltip placement="top" target={user}>
						{user}
					</UncontrolledTooltip>
				</>
			))}
		</Container>
	);
}

//**************
// styles
//**************

const Avatar = styled(Identicon)`
	height: 64px;
	width: 64px;
	border-radius: 50%;
	overflow: hidden;
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	height: 80px;
	overflow: auto;
`;
const UserInfo = styled.span`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
	background: #fff;
`;
