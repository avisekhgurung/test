import React from "react";
import Header from "../Headers/Header";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Lottie from "react-lottie";
import { defaultOptions } from "../../../utils/utils";
import { ChevronRight } from "@material-ui/icons";
import PropsTypes from "prop-types";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Section1(props) {
  const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `url(${props.heroImage})`,
      paddingTop: 220,
      paddingBottom: 200,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      clipPath: "polygon(0 0,0 100%,100% 75%,100% 0)",
      overflowX: "hidden",
    },
    heroHeading: {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
    heroText: {
      color: "#fff",
    },
    spacer4x: {
      marginTop: theme.spacing(6),
    },
    spacer3x: {
      marginTop: theme.spacing(3),
    },
    cardHero: {
      backgroundColor: theme.palette.secondary.main,
      maxWidth: 500,
      padding: theme.spacing(6),
      borderRadius: 15,
      boxShadow: theme.shadows[8],
      marginLeft: 100,
      marginTop: "-257px",
      zIndex: 1100,
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        marginTop: "-57px",
        marginLeft: 20,
        marginRight: 20,
      },
    },
    divider: {
      borderTop: `4px solid ${theme.palette.primary.main}`,
      width: 70,
      marginBottom: 10,
    },
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />

      {/*Section 1*/}
      <Grid container alignItems="center" className={classes.hero}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  className={classes.heroHeading}
                  color="primary"
                >
                  {props.title}
                </Typography>
              </motion.div>
              <div className={classes.spacer4x} />
              <Typography className={classes.heroText} variant={"body1"}>
                {props.body}
              </Typography>

              {/*To check if there is Button text prop is provided*/}
              {props.buttonText ? (
                <React.Fragment>
                  <div className={classes.spacer4x} />
                  <a href="#contact">
                    <Button variant="contained" color="primary" size="large">
                      {props.buttonText}
                    </Button>
                  </a>
                </React.Fragment>
              ) : (
                <div />
              )}
              {/************/}
            </Grid>

            {/*To check if there is Animation prop is provided*/}
            {props.animation ? (
              <Grid item xs={12} md={6}>
                <Lottie width={500} options={defaultOptions(props.animation)} />
              </Grid>
            ) : (
              <div />
            )}
            {/* *******/}
          </Grid>
        </Container>
      </Grid>

      {/*To check if there is card Heading prop is provided*/}
      {props.cardHeading ? (
        <Grid container style={{ marginBottom: 80 }}>
          <Grid item xs={12} md={6} />
          <Grid item xs={12} md={6}>
            <div className={classes.cardHero}>
              <div className={classes.divider} />
              <Typography color="primary">{props.cardHeading}</Typography>
              <div className={classes.spacer4x} />
              <Typography variant="h5" className={classes.heroText}>
                {props.cardText}
              </Typography>
              <div className={classes.spacer4x} />
              <Link href={"/portfolio"}>
                <a>
                  <Button
                    variant="outlined"
                    color="primary"
                    size={"large"}
                    endIcon={<ChevronRight />}
                  >
                    Read More
                  </Button>
                </a>
              </Link>
            </div>
          </Grid>
        </Grid>
      ) : (
        <div />
      )}
    </React.Fragment>
  );
}

Section1.propTypes = {
  title: PropsTypes.string.isRequired,
  body: PropsTypes.string.isRequired,
  heroImage: PropsTypes.any.isRequired,
  buttonText: PropsTypes.string,
  cardHeading: PropsTypes.string,
  cardText: PropsTypes.string,
  animation: PropsTypes.any,
};
