import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Link from "next/link";

export default function ImageCard(props) {
  let height = 315;

  if (props.big) {
    height = 650;
  }

  const useStyles = makeStyles((theme) => ({
    type: {
      position: "absolute",
      width: "auto",
      left: 0,
      backgroundColor: theme.palette.primary.main,
      zIndex: 10,
      borderRadius: "10px 0 10px 0",
    },
    typeText: {
      color: theme.palette.common.white,
      padding: "5px 25px",
    },
    caseStudies: {
      position: "absolute",
      width: "auto",
      right: 0,
      backgroundColor: theme.palette.primary.main,
      zIndex: 10,
      borderRadius: "0 0 0 10px",
    },
    caseStudiesText: {
      color: theme.palette.common.white,
      padding: "5px 25px",
    },
    link: {
      boxShadow: "0 0 15px rgba(0,0,0,0.2)",
      position: "relative",
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height,
      borderRadius: 10,
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
        backgroundColor: "rgba(16,55,48,.94)",
        opacity: 0,
        WebkitTransition: ".25s all",
        OTransition: ".25s all",
        transition: ".25s all",
      },
      "&:hover::after": {
        opacity: 1,
      },
    },
    title: {
      color: "#fff",
      textDecoration: "underline",
    },
  }));

  const classes = useStyles();

  if (props.link) {
    return (
      <Link href={props.link}>
        <a>
          <div className={[classes.link, "image-card-link"].join(" ")}>
            {props.caseStudy ? (
              <div className={classes.caseStudies}>
                <Typography align="center" className={classes.caseStudiesText}>
                  Case Studies
                </Typography>
              </div>
            ) : (
              <div />
            )}
            <div className={classes.type}>
              <Typography align="center" className={classes.typeText}>
                {props.type}
              </Typography>
            </div>
            <div className="image-card-content">
              <Typography
                variant="h4"
                className={classes.title}
                align={"center"}
              >
                {props.title}
              </Typography>
            </div>
          </div>
        </a>
      </Link>
    );
  }

  return (
    <div className={[classes.link, "image-card-link"].join(" ")}>
      {props.caseStudy ? (
        <div className={classes.caseStudies}>
          <Typography align="center" className={classes.caseStudiesText}>
            Case Studies
          </Typography>
        </div>
      ) : (
        <div />
      )}
      <div className={classes.type}>
        <Typography align="center" className={classes.typeText}>
          {props.type}
        </Typography>
      </div>
      <div className="image-card-content">
        <Typography variant="h4" className={classes.title} align={"center"}>
          {props.title}
        </Typography>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  big: PropTypes.bool,
  image: PropTypes.any,
  type: PropTypes.string.isRequired,
  caseStudy: PropTypes.bool,
};
