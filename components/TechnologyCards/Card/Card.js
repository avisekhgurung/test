import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

export default function Card(props) {
  const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(2),
      position: "relative",
      boxShadow: theme.shadows[2],
      borderRadius: 10,
      transition: "all 0.2s linear",
      "&:hover": {
        boxShadow: theme.shadows[8],
        transform: "scale(1.03)",
      },
      "&:after": {
        display: "block",
        content: "''",
        borderRadius: 10,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1,
        backgroundColor: "rgba(16,55,48,.90)",
        opacity: 0,
        WebkitTransition: ".25s all",
        OTransition: ".25s all",
        transition: ".25s all",
      },
      "&:hover::after": {
        opacity: 1,
      },
    },
    cardImage: {
      width: 150,
      height: 150,
      backgroundImage: `url(${props.image})`,
      backgroundSize: "contain",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      marginBottom: theme.spacing(4),
    },
    center: {
      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();
  return (
    <Grid
      container
      className={[classes.card, "tech-cards"].join(" ")}
      justifyContent="center"
    >
      <Grid item xs={12} className={classes.center}>
        <div className={classes.cardImage} />
      </Grid>
      <Grid item xs={12} className={classes.center}>
        <Typography
          style={{ colorL: "rgba(0,0,0,0.5))" }}
          variant="body1"
          color="secondary"
        >
          {props.technology}
        </Typography>
      </Grid>
      <div className="tech-hire-us">
        {/*<Button*/}
        {/*  variant="outlined"*/}
        {/*  size="small"*/}
        {/*  color="primary"*/}
        {/*  endIcon={<ChevronRight />}*/}
        {/*>*/}
        {/*  Learn More*/}
        {/*</Button>*/}
      </div>
    </Grid>
  );
}
