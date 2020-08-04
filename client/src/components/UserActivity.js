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
		padding: 0.75rem;
		list-style: none;
		font-size: 0.75rem;
		color: #4e4e4e;

		li {
			white-space: pre;
			padding-bottom: 0.5rem;
		}
	}
`;
