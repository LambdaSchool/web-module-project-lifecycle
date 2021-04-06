import React from "react";
import styled from "styled-components";

const User = (props) => {
	return (
		<UserDiv>
			<Userh1>{props.data.name}</Userh1>
			<img alt="" width="400px" src={props.data.avatar_url} />
			<UserInfoDiv>
				<UserATag href={props.data.html_url}>{props.data.html_url}</UserATag>
				<h2>Location: {props.data.location}</h2>
			</UserInfoDiv>
			<FollowerDiv>
				<FollowPtag>Followers: {props.data.followers}</FollowPtag>
				<FollowPtag>Following: {props.data.following}</FollowPtag>
			</FollowerDiv>
		</UserDiv>
	);
};
const UserDiv = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	border: 5px solid black;
	background-color: black;
`;
const Userh1 = styled.h1`
	align-items: center;
	display: flex;
	flex-direction: column;
	border: 5px solid black;
	background-color: black;
	color: white;
	text-shadow: 4px 4px 4px green;
`;
const UserATag = styled.a`
	color: green;
	font-weight: bold;
	font-size: 1.2rem;
`;
const UserInfoDiv = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	color: snow;
	text-decoration: none;
`;
const FollowerDiv = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	color: snow;
	font-size: 1.5rem;
`;
const FollowPtag = styled.p`
	margin: 1rem 2rem;
	text-shadow: 4px 4px 4px green;
`;
export default User;
