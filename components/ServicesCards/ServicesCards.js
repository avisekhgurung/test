import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import * as strategyAnimation from "../../animations/strategies.json";
import * as experinceDesign from "../../animations/experinceDesign.json";
import * as development from "../../animations/Development.json";
import * as engineering from "../../animations/engineering.json";
import { defaultOptions } from "../../utils/utils";
import {
  designServices,
  developmentServices,
  engineeringServices,
  strategies,
} from "../../constants/constants";
import Link from "next/link";

export default function ServicesCards(props) {
  const useStyles = makeStyles((theme) => ({
    spacer4x: {
      marginTop: theme.spacing(6),
    },
    spacer3x: {
      marginTop: theme.spacing(3),
    },
    serviceGrid: {
      backgroundColor: props.menu ? theme.palette.secondary.main : "",
      boxShadow: theme.shadows[25],
      borderRadius: props.menu ? 10 : 0,
    },
    servicesCard: {
      backgroundColor: props.menu ? "" : theme.palette.secondary.main,
      padding: theme.spacing(6),
      boxShadow: theme.shadows[1],
      borderRadius: props.menu ? 0 : 10,
      marginRight: props.menu ? 0 : -20,
      transition: "all 0.2s linear",
      "&:hover": {
        transform: props.menu ? "scale(1)" : "scale(1.04)",
        backgroundImage: props.menu
          ? ""
          : "linear-gradient(120deg, #103730 30%, #445E6C 100%)",
      },
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2),
      },
    },
    serviceCardTitle: {
      color: "#fff",
      paddingTop: theme.spacing(3),
      fontWeight: theme.typography.fontWeightBold,
      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
    serviceCardText: {
      color: "#fff",
      paddingBottom: theme.spacing(2),
      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
  }));
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.serviceGrid}>
      <Grid item xs md={3} className={classes.servicesCard}>
        <div style={{ position: "relative", width: 100, height: 100 }}>
          <Lottie
            style={{ position: "absolute", top: -100, left: -70 }}
            options={defaultOptions(strategyAnimation)}
            height={300}
            width={300}
          />
        </div>
        <div className={classes.spacer3x} />
        <Typography className={classes.serviceCardTitle} variant="h5">
          Innovation Strategies
        </Typography>
        <div className={classes.spacer4x} />
        {strategies.map((strategy, i) => (
          <Link key={i} href="/services">
            <a>
              <Typography className={classes.serviceCardText} variant="body2">
                {strategy}
              </Typography>
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs md={3} className={classes.servicesCard}>
        <div style={{ position: "relative", width: 100, height: 100 }}>
          <Lottie
            style={{ position: "absolute", top: -100, left: -70 }}
            options={defaultOptions(experinceDesign)}
            height={300}
            width={300}
          />
        </div>
        <div className={classes.spacer3x} />
        <Typography className={classes.serviceCardTitle} variant="h5">
          Experience Design
        </Typography>
        <div className={classes.spacer4x} />
        {designServices.map((designService, i) => (
          <Link key={i} href="/services">
            <a>
              <Typography className={classes.serviceCardText} variant="body2">
                {designService}
              </Typography>
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs md={3} className={classes.servicesCard}>
        <div style={{ position: "relative", width: 100, height: 100 }}>
          <Lottie
            style={{ position: "absolute", top: -100, left: -90 }}
            options={defaultOptions(development)}
            height={300}
            width={300}
          />
        </div>
        <div className={classes.spacer3x} />
        <Typography className={classes.serviceCardTitle} variant="h5">
          Software Development
        </Typography>
        <div className={classes.spacer4x} />
        {developmentServices.map((developmentService, i) => (
          <Link key={i} href="/services">
            <a>
              <Typography className={classes.serviceCardText} variant="body2">
                {developmentService}
              </Typography>
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs md={3} className={classes.servicesCard}>
        <div style={{ position: "relative", width: 100, height: 100 }}>
          <Lottie
            style={{ position: "absolute", top: -100, left: -90 }}
            options={defaultOptions(engineering)}
            height={300}
            width={300}
          />
        </div>
        <div className={classes.spacer3x} />
        <Typography className={classes.serviceCardTitle} variant="h5">
          Robotics & Engineering
        </Typography>
        <div className={classes.spacer4x} />
        {engineeringServices.map((engineeringService, i) => (
          <Link key={i} href="/services">
            <a>
              <Typography className={classes.serviceCardText} variant="body2">
                {engineeringService}
              </Typography>
            </a>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}
