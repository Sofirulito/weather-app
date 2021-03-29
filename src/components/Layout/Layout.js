import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GlobalContext } from "../Context/globalContext";

const GlobalStyle = createGlobalStyle`
  	body {
   	background: ${(props) => props.theme.background};
		color: ${(props) => props.theme.text}
	}`

const Layout = ({ children }) => {
	const darkTheme = {
		background: "#000",
		secondaryBackground: "#DFe0FF",
		text: "#FFF",
		button: 'red'
	};

	const lightTheme = {
		background: "#FFF",
		secondaryBackground: "#6165F7",
		text: "#333",
		button: 'green'
	};

	const currentTheme = useContext(GlobalContext);
	let theme;
	switch (currentTheme.theme) {
		case "dark":
			theme = darkTheme;
			break;
		case "light":
			theme = lightTheme;
			break;
		default:
			theme = lightTheme;
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<main>{children}</main>
		</ThemeProvider>
	);
};

export default Layout;
