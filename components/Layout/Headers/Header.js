import React from "react";
import { makeStyles } from "@material-ui/core";
import MainHeader from "./MainHeader/MainHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

const useStyles = makeStyles((theme) => ({
  mobileHeader: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mainHeader: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.mainHeader}>
        <MainHeader />
      </div>
      <div className={classes.mobileHeader}>
        <MobileHeader />
      </div>
    </React.Fragment>
  );
}
