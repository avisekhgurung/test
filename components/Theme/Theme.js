import React from "react"
import { createTheme } from "@material-ui/core"

const Theme = createTheme({
	palette: {
		primary: {
			main: "#20DBD5",
		},
		secondary: {
			main: "#103730",
		},
	},
	typography: {
		fontSize: 16,
		fontFamily: [
			"Overpass",
			"-apple-system",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
})

export default Theme
