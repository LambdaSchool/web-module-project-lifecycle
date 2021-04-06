import React from "react";
import styled from "styled-components";

const SearchBar = (props) => {
	console.log(props);
	const { onChange, onSubmit, searchBar } = props;
	return (
		<SearchBarFormDiv onSubmit={onSubmit}>
			<input
				type="text"
				onChange={onChange}
				value={searchBar}
				placeholder="Search For Developer"
			/>

			<button onClick={onSubmit} type="submit">
				Search Developer Info
			</button>
		</SearchBarFormDiv>
	);
};
const SearchBarFormDiv = styled.form`
	display: flex;
	width: 35vw;
	margin: 0 auto;
	background-color: white;
`;
export default SearchBar;
