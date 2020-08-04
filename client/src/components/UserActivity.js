import React from "react";
import styled from "styled-components/macro";

//**************
// component
//**************

export default function UserActivity({ state }) {
	return (
		<Container>
			<ul>
				{state.userActivity.map((activity, index) => (
					<li key={`activity-${index}`}>
						{`${activity.user}:`}
						<br />
						{`   ${activity.action}`}
					</li>
				))}
			</ul>
		</Container>
	);
}

//**************
// styles
//**************

const Container = styled.aside`
	margin-top: 80px;
	border: 1px solid #ccc;
	background: #fff;
	overflow: auto;

	ul {
		padding: 9px;
		list-style: none;
		font-size: 12px;
		color: #4e4e4e;

		li {
			white-space: pre;
			padding-bottom: 0.5rem;
		}
	}
`;
