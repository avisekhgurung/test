import React from "react";
import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  ArrowRight,
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { isEmail } from "validator";
import logo from "../../../public/Vebholic-Logo Light.svg";
import footerImg from "../../../public/Footer-Background.png";
import Lottie from "react-lottie";
import { defaultOptions } from "../../../utils/utils";
import * as animation from "../../../animations/Footer-arrow.json";

export default function Footer() {
  const [error, setError] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [paused, setPaused] = React.useState(true);
  const [stopped, setStopped] = React.useState(true);

  const useStyles = makeStyles((theme) => ({
    sec1: {
      backgroundColor: theme.palette.secondary.main,
      paddingBottom: 50,
      backgroundImage: `url(${footerImg})`,
      backgroundSize: "contain",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    },
    inputDiv: {
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: 10,
      marginTop: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    inputField: {
      width: "300px",
      border: "none",
      height: "50px",
      backgroundColor: "rgba(0,0,0,0)",
      color: "rgba(255,255,255,0.7)",
      fontSize: "20px",
      paddingLeft: "10px",
      "&:focus": {
        border: "none",
        outline: "none",
      },
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "0 10px 10px 0",
    },
    progressBar: {
      backgroundColor: "#556464",
      position: "absolute",
      width: "100%",
      height: "6px",
      top: "calc(100% - 6px)",
      borderRadius: "0 0 10px 10px",
    },
    activeProgress: {
      backgroundColor: theme.palette.primary.main,
      position: "absolute",
      width:
        step === 0 ? "0%" : step === 1 ? "33%" : step === 2 ? "66%" : "100%",
      height: "6px",
      top: "calc(100% - 6px)",
      borderRadius: "0 0 0 10px",
      zIndex: 100,
    },
    captionText: {
      width: "100%",
      color: error ? theme.palette.error.main : "#fff",
    },
    footerContent: {
      marginTop: 150,
    },
    logo: {
      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  const setStep1 = () => {
    setError(false);
    if (name) {
      setStep(1);
    } else {
      setError(true);
    }
  };

  const setStep2 = () => {
    setError(false);
    if (email && isEmail(email)) {
      setStep(2);
    } else {
      setError(true);
    }
  };

  const setStep3 = () => {
    setError(false);
    if (details) {
      setStep(3);
    } else {
      setError(true);
    }
  };

  let fields = (value, callback, fn) => (
    <React.Fragment>
      <input
        className={classes.inputField}
        value={value}
        onChange={(e) => callback(e.target.value)}
      />
      <IconButton
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={fn}
      >
        <ArrowRight color="secondary" />
      </IconButton>
    </React.Fragment>
  );

  let captionText = "What's your name?";

  if (step === 1) {
    captionText = `Hi ${name}, Can I know your email?`;
  } else if (step === 2) {
    captionText = `${name}, How we can help you?`;
  } else if (step === 3) {
    captionText = `Our team will contact your shortly`;
  }

  const contactUs = (
    <div className={classes.inputDiv}>
      {step === 0
        ? fields(name, setName, setStep1)
        : step === 1
        ? fields(email, setEmail, setStep2)
        : step === 2
        ? fields(details, setDetails, setStep3)
        : ""}
      <div className={classes.progressBar}>
        <div className={classes.activeProgress} />
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {/*  */}
      {/* Footer */}
      <Grid
        container
        className={classes.sec1}
        id="contact"
        onMouseEnter={() => {
          setPaused(false);
          setStopped(false);
        }}
        onMouseLeave={() => setPaused(true)}
      >
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Grid container justifyContent={"center"}>
              <Grid item xs={12}>
                <Lottie
                  isStopped={stopped}
                  isPaused={paused}
                  options={defaultOptions(animation)}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={6}>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  variant="h4"
                  style={{ color: "#fff" }}
                >
                  Ready to Work on What's Next
                </Typography>
              </Grid>
              <Typography
                align="center"
                className={classes.captionText}
                variant="caption"
              >
                {captionText}
              </Typography>
              {step !== 3 ? contactUs : ""}
            </Grid>
            <Grid
              container
              justifyContent="center"
              className={classes.footerContent}
              spacing={2}
            >
              <Grid item xs={12} className={classes.logo}>
                <img src={logo} alt="site-logo" width={130} />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  style={{ color: "#fff" }}
                  align="center"
                >
                  © 2020 Vebholic Pvt. Ltd.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent="center"
                  spacing={4}
                  style={{ marginTop: 8 }}
                >
                  <Facebook
                    style={{ color: "rgba(255,255,255,0.5)", marginRight: 10 }}
                  />
                  <Twitter
                    style={{ color: "rgba(255,255,255,0.5)", marginRight: 10 }}
                  />
                  <LinkedIn
                    style={{ color: "rgba(255,255,255,0.5)", marginRight: 10 }}
                  />
                  <YouTube
                    style={{ color: "rgba(255,255,255,0.5)", marginRight: 10 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
