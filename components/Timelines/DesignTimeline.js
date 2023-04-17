import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import timelineImage from "../../public/uiux-timeline.png"
import cycleImage from "../../public/uiux-cycle.png"
import { ArrowDownward } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
	timeline: {
		position: "relative",
	},
	phases: {
		position: "absolute",
	},
	heading: {
		color: "#fff",
		marginBottom: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.8rem",
		},
	},
	text: {
		color: "rgba(255,255,255,0.6)",
		fontWeight: theme.typography.fontWeightLight,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	images: {
		display: "flex",
		justifyContent: "center",
	},
	timelineImg: {
		[theme.breakpoints.down("sm")]: {
			width: 200,
		},
	},
	phase1: {
		top: 15,
		[theme.breakpoints.down("sm")]: {
			top: 15,
		},
	},
	phase2: {
		top: 105,
		[theme.breakpoints.down("sm")]: {
			top: 55,
		},
	},
	phase3: {
		top: 235,
		[theme.breakpoints.down("sm")]: {
			top: 110,
		},
	},
	phase4: {
		top: 325,
		[theme.breakpoints.down("sm")]: {
			top: 165,
		},
	},
	phase5: {
		top: 455,
		[theme.breakpoints.down("sm")]: {
			top: 215,
		},
	},
	phase6: {
		top: 540,
		[theme.breakpoints.down("sm")]: {
			top: 265,
		},
	},
	cycle: {
		position: "absolute",
		top: 715,
		[theme.breakpoints.down("sm")]: {
			top: 340,
			width: 400,
		},
	},
	arrowIcon: {
		marginTop: -40,
		color: "#3B5752",
		border: "3px solid #3B5752",
		borderRadius: 50,
	},
}))

export default function DesignTimeline() {
	const classes = useStyles()
	return (
		<div className={classes.timeline}>
			<div className={classes.content}>
				<div
					className={[classes.phase1, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Understanding
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Listen to stakeholders <br />
						Understand business objectives <br />
						Functional requirements <br />
						Technology constraints <br />
					</Typography>
				</div>
				<div
					className={[classes.phase2, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						User Research
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Personas <br />
						Ethnographic research
						<br />
						Interviews & observations
						<br />
						Task analysis & user stories
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase3, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Analytics & Discovery
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Metrics & analysis
						<br />
						Competitive analysis
						<br />
						Ideation & strategy
						<br />
						Benchmarking
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase4, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Wireframes
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Concept sketching <br />
						System/Process flow
						<br />
						Information architecture
						<br />
						Interaction design
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase5, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Mockups & Prototypes
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Brand identity integration
						<br />
						High-fidelity mockups
						<br />
						Interactive prototypes
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase6, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Finalize & Code
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Finalize UX deliverables <br />
						Suggestions / next steps
						<br />
						Code front-end interaction
						<br />
					</Typography>
				</div>
			</div>
			<div className={classes.images}>
				<ArrowDownward fontSize='large' className={classes.arrowIcon} />
			</div>
			<div className={classes.images}>
				<img
					className={classes.timelineImg}
					src={timelineImage}
					alt='Timeline'
				/>
			</div>
			<div className={classes.images}>
				<img className={classes.cycle} src={cycleImage} alt='Cycle' />
			</div>
		</div>
	)
}
