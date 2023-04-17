import React from "react"
import { Grid } from "@material-ui/core"
import reactImg from "../../public/React_200px.png"
import angularImg from "../../public/AngularJS.png"
import nodejsImg from "../../public/nodejs.png"
import flutterImg from "../../public/flutter.png"
import electronImg from "../../public/electron-node-js.png"
import awsImg from "../../public/AWS-logo-e1549399162480.png"
import androidImg from "../../public/Android-logo-e1549399087316.png"
import azureImg from "../../public/Azure-logo-e1549399428246.png"
import bonsaiImg from "../../public/bonsai-color-1.png"
import dotnetImg from "../../public/dotNET.png"
import iosImg from "../../public/ios-logo-e1549399875844.png"
import jsImg from "../../public/js_logo.jpg"
import openImg from "../../public/opencv-black-text-1.png"
import pythonImg from "../../public/Python_200px.png"
import unityImg from "../../public/Unity_logo_dark-1.png"
import dockerImg from "../../public/white-docker-logo-black.png"
import figmaImg from "../../public/Figma.png"
import framerImg from "../../public/Framer.png"
import Card from "./Card/Card"

const data = [
	{ image: reactImg, name: "React" },
	{ image: angularImg, name: "Angular" },
	{ image: nodejsImg, name: "Node JS" },
	{ image: flutterImg, name: "Flutter" },
	{ image: electronImg, name: "Electron" },
	{ image: androidImg, name: "Android" },
	{ image: awsImg, name: "AWS" },
	{ image: azureImg, name: "Azure" },
	{ image: bonsaiImg, name: "Bonsai" },
	{ image: dotnetImg, name: "dot NET" },
	{ image: iosImg, name: "IOS" },
	{ image: jsImg, name: "Javascript" },
	{ image: openImg, name: "Open CV" },
	{ image: pythonImg, name: "Python" },
	{ image: unityImg, name: "Unity" },
	{ image: dockerImg, name: "Docker" },
	{ image: figmaImg, name: "Figma" },
	{ image: framerImg, name: "Framer" },
]

export default function TechnologyCards() {
	return (
		<Grid
			container
			spacing={3}
			justifyContent='center'
			style={{ position: "relative" }}>
			{data.map((tech, i) => (
				<Grid key={i} item xs={6} sm={4} md={3} lg={2}>
					<Card image={tech.image} technology={tech.name} />
				</Grid>
			))}
		</Grid>
	)
}
