import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import Logo from "../../../../public/Vebholic-logo.svg";
import Link from "next/link";
import ServicesCards from "../../../ServicesCards/ServicesCards";

const HtmlTooltip = withStyles((theme) => ({
  popper: {
    top: "15px !important",
    width: 800,
  },
  tooltip: {
    minWidth: 1100,
    backgroundColor: "rgba(0,0,0,0)",
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: 90,
  },
  link: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    transition: "all 0.1s linear",
    paddingBottom: 5,
    fontSize: "0.95rem",
    borderBottom: `2px solid #fff`,
    "&:hover": {
      color: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  contact: {
    marginLeft: theme.spacing(4),
    width: 200,
    height: 50,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const links = ["SERVICES", "PORTFOLIO", "ABOUT"];

const dropDownMenu = {
  SERVICES: <ServicesCards menu />,
  PORTFOLIO: <div />,
  ABOUT: <div />,
};

export default function MainHeader() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container className={classes.header} alignItems="center">
        <Grid item xs={6} md={3}>
          <Link href="/">
            <a>
              <img src={Logo} width={190} alt="vebholic-logo" />
            </a>
          </Link>
        </Grid>
        <Grid item xs={6} md={9}>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
          >
            {links.map((link, i) => (
              <Grid item key={i}>
                <Link href={`/${link.toLowerCase()}`}>
                  <a>
                    <HtmlTooltip interactive title={dropDownMenu[link]}>
                      <Typography variant="body1" className={classes.link}>
                        {link}
                      </Typography>
                    </HtmlTooltip>
                  </a>
                </Link>
              </Grid>
            ))}
            <Grid item>
              <a href="#contact">
                <Button
                  className={classes.contact}
                  color="primary"
                  variant="outlined"
                >
                  CONTACT
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
