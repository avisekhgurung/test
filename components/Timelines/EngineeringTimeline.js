import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import timelineImage from "../../public/hardwaredev-timeline.png"
import cycleImage from "../../public/hardwaredev-cycle.png"
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
			fontSize: "1rem",
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
		top: 145,
		[theme.breakpoints.down("sm")]: {
			top: 75,
		},
	},
	phase3: {
		top: 245,
		[theme.breakpoints.down("sm")]: {
			top: 120,
		},
	},
	phase4: {
		top: 405,
		[theme.breakpoints.down("sm")]: {
			top: 200,
		},
	},
	phase5: {
		top: 505,
		[theme.breakpoints.down("sm")]: {
			top: 240,
		},
	},
	phase6: {
		top: 665,
		[theme.breakpoints.down("sm")]: {
			top: 320,
		},
	},
	cycle: {
		position: "absolute",
		top: 945,
		[theme.breakpoints.down("sm")]: {
			top: 440,
			width: 500,
		},
	},
	arrowIcon: {
		marginTop: -40,
		color: "#3B5752",
		border: "3px solid #3B5752",
		borderRadius: 50,
	},
}))

export default function EngineeringTimeline() {
	const classes = useStyles()
	return (
		<div className={classes.timeline}>
			<div className={classes.content}>
				<div
					className={[classes.phase1, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Discovery
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Stakeholder buy-in <br />
						Understand business objectives
						<br />
						Concept ideas
						<br />
						Technology constraints
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase2, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Virtual Design
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Design partitioning
						<br />
						Electronics schematics
						<br />
						Industrial/mechanical design
						<br />
						Software/firmware research
						<br />
						UI/UX research
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase3, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Physical Design
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Circuit layout
						<br />
						ME/breadboard and product design
						<br />
						Packaging design
						<br />
						Software/firmware design
						<br />
						UI/UX design
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase4, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Build Prototype
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Align with fabricator
						<br />
						ME/EE assemblies
						<br />
						Verify fit
						<br />
						Verify function
						<br />
						Software development
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase5, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Test
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Measure/verify performance
						<br />
						Certifications & compliance
						<br />
						Validate manufacturing tests
						<br />
						Reliability testing
						<br />
						UI/UX testing
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase6, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Produce
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Transfer design to fabricators <br />
						Fulfillment/distribution
						<br />
						Production refinements
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
