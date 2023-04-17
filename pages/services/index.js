import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import heroImage from "../../public/services-hero-background.jpg";
import { xServicesSec1, xServicesText } from "../../language/language";
import * as heroAnimation from "../../animations/our-services.json";
import Section1 from "../../components/Layout/Section1/Section1";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import Footer from "../../components/Layout/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  spacer6x: {
    marginTop: theme.spacing(6),
  },
  spacer3x: {
    marginTop: theme.spacing(3),
  },
  sec2: {
    marginTop: 100,
    marginBottom: 100,
  },
  servicesCard: {
    marginTop: 100,
  },
}));

export default function Services() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/*Section  1*/}
      <Section1
        title={"Our Services"}
        body={xServicesSec1}
        heroImage={heroImage}
        animation={heroAnimation}
      />

      {/*  Section 2*/}
      <Grid container className={classes.sec2}>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant="h4" color="secondary" align="center">
                  COMPREHENSIVE SERVICES
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  {xServicesText}
                </Typography>
              </Grid>
            </Grid>
          </Container>

          {/*  ServicesCards*/}
          <Container maxWidth="lg" className={classes.servicesCard}>
            <ServicesCards />
          </Container>
        </Grid>
      </Grid>

      {/*  Footer*/}
      <Footer />
    </React.Fragment>
  );
}
