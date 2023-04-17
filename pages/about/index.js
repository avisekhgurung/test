import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import heroImage from "../../public/abous-us.jpg";
import * as teamAnimation from "../../animations/our-team.json";
import Section1 from "../../components/Layout/Section1/Section1";
import Footer from "../../components/Layout/Footer/Footer";
import {
  xAboutSection2Heading,
  xAboutSection2Text,
  xAboutSection3Heading,
  xAboutSection3Text,
  xAboutSection5Heading,
  xAboutSection5Text,
} from "../../language/language";
import laptopImage from "../../public/about-us-laptop.jpg";
import aboutUsLaptopImage from "../../public/our-works-bg.jpg";
import teamFistImage from "../../public/colleagues-giving-fist-bump.jpg";

const useStyles = makeStyles((theme) => ({
  sec2: {
    marginTop: 100,
    marginBottom: 100,
  },
  heading: {
    borderTop: `4px solid ${theme.palette.primary.main}`,
    fontWeight: "700",
    paddingTop: theme.spacing(1),
    textTransform: "uppercase",
    width: "fit-content",
  },
  laptopImage: {
    width: "140%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  sec4: {
    backgroundColor: "#fff",
    paddingTop: 120,
    paddingBottom: 120,
  },
  sec4Bg: {
    height: "1649px",
    display: "flex",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundImage: `url(${aboutUsLaptopImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center -396px",
  },
  videoDiv: {
    display: "flex",
    justifyContent: "center",
    WebkitTransform: "perspective(408px) rotateX(3deg)",
    transform: "perspective(408px) rotateX(3deg)",
    position: "relative",
    top: "-2px",
    width: 752,
  },
  video: {
    height: 450,
    objectFit: "cover",
  },
  sec3: {
    minHeight: 900,
    background: `#fff url(${teamFistImage}) center top no-repeat`,
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      minHeight: 450,
    },
  },
  sec5: {
    backgroundColor: theme.palette.secondary.main,
    clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0% 100%)",
    marginTop: -800,
    paddingTop: 300,
    paddingBottom: 100,
  },
  vebHeading: { display: "flex", justifyContent: "center" },
  vebBorder: {
    width: 50,
    borderTop: `4px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing(1),
  },
}));

export default function portfolio() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/*Section  1*/}
      <Section1
        title={"It's always about you at Vebholic"}
        body={"Left Brain Meets Right Brain. This is What make us Vebholic"}
        heroImage={heroImage}
        animation={teamAnimation}
      />

      {/*Section 2 Who We Are*/}
      <Grid container className={classes.sec2}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      className={classes.heading}
                      color="primary"
                    >
                      Who We Are
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4" color="secondary">
                      {xAboutSection2Heading}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary">
                      {xAboutSection2Text}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  className={classes.laptopImage}
                  src={laptopImage}
                  alt="Laptop"
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      {/*Section 3*/}

      <Grid container className={classes.sec3} />

      {/*What We Do*/}
      <Grid container className={classes.sec4}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={8} justifyContent="center">
              <Grid item xs={12}>
                <Container maxWidth="sm">
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <div className={classes.vebHeading}>
                        <div className={classes.vebBorder} />
                      </div>
                      <Typography
                        align="center"
                        variant="body2"
                        color="primary"
                      >
                        What We Do
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align="center" variant="h4" color="secondary">
                        {xAboutSection3Heading}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="body1"
                        color="textSecondary"
                      >
                        {xAboutSection3Text}
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item xs={12} className={classes.sec4Bg}>
                <div className={classes.videoDiv}>
                  <video
                    className={classes.video}
                    id="video"
                    playsInline="playsinline"
                    muted="muted"
                    preload="auto"
                    autoPlay="autoplay"
                    loop="loop"
                  >
                    <source
                      src={require("../../public/our-work-video.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      {/*Section 5*/}
      <Grid container className={classes.sec5}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={8} justifyContent={"center"}>
              <Grid item xs={12}>
                <Container maxWidth={"md"}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <div className={classes.vebHeading}>
                        <div className={classes.vebBorder} />
                      </div>
                      <Typography
                        align="center"
                        variant="body2"
                        color="primary"
                      >
                        Why We Do It
                      </Typography>
                    </Grid>
                    <div style={{ height: 80, width: "100%" }} />
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="h2"
                        style={{ color: `#fff` }}
                      >
                        {xAboutSection5Heading}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="body1"
                        style={{ color: `rgba(255, 255, 255, 0.6)` }}
                      >
                        {xAboutSection5Text}
                      </Typography>
                    </Grid>
                    <div style={{ height: 80, width: "100%" }} />
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="h3"
                        style={{ color: `#fff` }}
                      >
                        Our values & principles
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="body1"
                        style={{ color: `rgba(255, 255, 255, 0.6)` }}
                      >
                        Our values define how we do business and interact with
                        our colleagues, partners, and customers. Our four core
                        values are integrity, responsibility, respect and
                        pioneering. As we expand into new markets, recruit new
                        talent and face new challenges, these guide our people
                        in the decisions and actions they take every day.
                      </Typography>
                    </Grid>
                    <div style={{ height: 80, width: "100%" }} />
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="h4"
                        style={{ color: `#fff` }}
                      >
                        Always working with integrity
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="body1"
                        style={{ color: `rgba(255, 255, 255, 0.6)` }}
                      >
                        Doing business with integrity has always been at the
                        heart of our companies responsibility commitments.
                        Integrity defines how we behave, wherever we are. It
                        guides us to do the right thing for the long-term
                        success of Vebholic.
                      </Typography>
                    </Grid>
                    <div style={{ height: 80, width: "100%" }} />
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="h5"
                        style={{ color: `#fff` }}
                      >
                        Working with others
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        align="center"
                        variant="body1"
                        style={{ color: `rgba(255, 255, 255, 0.6)` }}
                      >
                        We want to work with all types of businesses who have
                        values similar to ours and uphold the same standards as
                        we do. Our Responsible Sourcing Policy and Responsible
                        Business Partner Policy, aligned to Vebholic’s Code of
                        Business Principles, seek to uphold twelve fundamental
                        principles covering business integrity including
                        specific responsibilities relating to employees, clients
                        and the environment.
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      {/*  Footer*/}
      <Footer />
    </React.Fragment>
  );
}
