import { makeStyles } from "@material-ui/core";
import sec2bgImage1 from "../public/Macbook-4.png";
import processBgImage from "../public/process-light.png";

const useStyles = makeStyles((theme) => ({
  spacer4x: {
    marginTop: theme.spacing(6),
  },
  spacer3x: {
    marginTop: theme.spacing(3),
  },
  divider: {
    borderTop: `4px solid ${theme.palette.primary.main}`,
    width: 70,
    marginBottom: 10,
  },
  sec2: {
    marginTop: 200,
  },
  macbookDiv: {
    position: "relative",
    left: "-45%",
  },
  macbookBgImage1: {
    backgroundImage: `url(${sec2bgImage1})`,
    backgroundSize: "contain",
    backgroundRepeat: " no-repeat",
    backgroundPosition: "center right",
    position: "absolute",
    bottom: 0,
    height: 1225,
    paddingTop: "50%",
    width: "156%",
    top: -292,
    zIndex: 8,
    [theme.breakpoints.down("sm")]: {
      top: -192,
      height: 500,
    },
  },
  macbookSide: {
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      marginTop: 300,
    },
  },
  sec3: {
    backgroundColor: "rgb(236 245 244)",
    paddingTop: 350,
    paddingBottom: 350,
    clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0% 100%)",
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 0, 100% 7%, 100% 100%, 0% 100%)",
    },
  },
  allServices: {
    position: "absolute",
    marginTop: "5%",
    zIndex: 200,
    marginLeft: "10%",
  },
  sec4: {
    marginTop: -300,
    paddingTop: 280,
    paddingBottom: 100,
    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
    backgroundColor: "#ECF5F4",
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0% 100%)",
      marginTop: -300,
      paddingTop: 180,
    },
  },
  sec4Button: {
    marginTop: theme.spacing(6),
  },
  sec5: {
    backgroundColor: "rgb(121 195 193)",
    background: `url(${processBgImage})`,
    paddingTop: 200,
    paddingBottom: 200,
    position: "relative",
  },
  lottieDiv: {
    position: "relative",
    height: 500,
    marginTop: -220,

    [theme.breakpoints.down("sm")]: {
      marginRight: -16,
      marginTop: -120,
      overflowX: "hidden",
    },
  },
  roboLottie: {
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: 650,
    },
  },
  sec6: {
    backgroundColor: theme.palette.secondary.main,
    clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
    marginTop: -250,
    paddingTop: 250,
    minHeight: 1100,
  },
  buttonMargin: {
    margin: theme.spacing(3),
  },
  sec7: {
    marginTop: 100,
    marginBottom: 100,
  },
  sec9: {
    marginTop: -300,
    paddingTop: 280,
    paddingBottom: 400,
    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0% 100%)",
      marginTop: -300,
      paddingTop: 180,
    },
  },
}));

export default useStyles;
