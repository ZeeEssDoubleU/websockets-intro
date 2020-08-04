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
				<React.Fragment key={user}>
					<UserInfo id={user}>
						<Avatar size={40} string={user} />
					</UserInfo>
					<UncontrolledTooltip placement="auto" target={user}>
						{user}
					</UncontrolledTooltip>
				</React.Fragment>
			))}
		</Container>
	);
}

//**************
// styles
//**************

const Avatar = styled(Identicon)`
	height: 100%;
	width: 100%;
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	height: 80px;
	overflow: auto;
`;
const UserInfo = styled.span`
	width: 2.5rem;
	height: 2.5rem;
	margin-right: 0.75rem;
	border-radius: 50%;
	overflow: hidden;
	background: #fff;
`;
