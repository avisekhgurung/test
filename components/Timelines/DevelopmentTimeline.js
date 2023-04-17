import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import timelineImage from "../../public/mobileapp-timeline.png"
import cycleImage from "../../public/mobileapp-cycle.png"
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
			top: 10,
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
			top: 160,
		},
	},
	phase5: {
		top: 455,
		[theme.breakpoints.down("sm")]: {
			top: 220,
		},
	},
	phase6: {
		top: 540,
		[theme.breakpoints.down("sm")]: {
			top: 265,
		},
	},
	phase7: {
		top: 670,
		[theme.breakpoints.down("sm")]: {
			top: 320,
		},
	},
	phase8: {
		top: 760,
		[theme.breakpoints.down("sm")]: {
			top: 365,
		},
	},
	cycle: {
		position: "absolute",
		top: 960,
		[theme.breakpoints.down("sm")]: {
			top: 450,
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

export default function DevelopmentTimeline() {
	const classes = useStyles()
	return (
		<div className={classes.timeline}>
			<div className={classes.content}>
				<div
					className={[classes.phase1, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Planning
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Business rules planning <br />
						Requirements gathering
						<br />
						Reviewing best practices
						<br />
						Competitive & problem research
						<br />
						Stakeholder interviews
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase2, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						UI/UX Design
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Create personas
						<br />
						Create task list
						<br />
						Wireframe UI
						<br />
						Create UI/UX mockups
						<br />
						Get user feedback
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase3, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Front-End Dev
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Real prototype inside app <br />
						Interaction experience
						<br />
						Get user feedback
						<br />
						Code front end
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase4, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Back-End Dev
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Develop API
						<br />
						Develop back-end architecture
						<br />
						Quality control
						<br />
						Client iterations
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase5, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Testing
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Functional testing <br />
						Integration testing
						<br />
						User testing
						<br />
						Device & unit testing
						<br />
						Bug fixes
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase6, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Deployment
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Ensure back-up <br />
						Build deployment
						<br />
						Deployment to app store
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase7, classes.phases, "right-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Maintenance & Support
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Backups <br />
						Server monitoring
						<br />
						Updates & upgrades
						<br />
						Troubleshooting
						<br />
						Bug fixes
						<br />
					</Typography>
				</div>
				<div
					className={[classes.phase8, classes.phases, "left-timeline"].join(
						" "
					)}>
					<Typography variant='h5' className={classes.heading}>
						Market Evaluation
					</Typography>
					<Typography variant='body2' className={classes.text}>
						Customer feedback <br />
						Ratings
						<br />
						Analytics
						<br />
						A / B testing
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
