import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import heroImage from "../public/hero-banner.png";
import {
  xHomeHeroBody,
  xHomeHeroHeading,
  xHomeSec2Heading,
  xHomeSec2text,
  xHomeSec3Heading,
  xHomeSec3Text,
  xHomeSec4Heading,
  xHomeSec4Text,
  xHomeSec5Heading,
  xHomeSec5Text,
  xHomeSec9Heading,
} from "../language/language";
import { ChevronRight } from "@material-ui/icons";
import ServicesCards from "../components/ServicesCards/ServicesCards";
import * as AllServices from "../animations/sec2animation.json";
import { defaultOptions } from "../utils/utils";
import Lottie from "react-lottie";
import ImageCard from "../components/ImageCard/ImageCard";
import * as ourProcessAnimation from "../animations/our-process.json";
import EngineeringTimeline from "../components/Timelines/EngineeringTimeline";
import DesignTimeline from "../components/Timelines/DesignTimeline";
import DevelopmentTimeline from "../components/Timelines/DevelopmentTimeline";
import TechnologyCards from "../components/TechnologyCards/TechnologyCards";
import Footer from "../components/Layout/Footer/Footer";
import * as heroAnimation from "../animations/hero-animation.json";
import Section1 from "../components/Layout/Section1/Section1";
import Jalanin from "../public/Jalanin.jpg";
import PixelBytes from "../public/Pixel-Bytes.jpg";
import WinePeace from "../public/Wine-Peace.jpg";
import CosCatalog from "../public/COS-Catalog.jpg";
import digiGem from "../public/digiGem.jpeg";
import Jobster from "../public/Jobster.jpg";
import Link from "next/link";
import * as processAnimation from "../animations/development-process.json";
import useStyles from "../styles/useStyles";

export default function Home() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState("Design");

  let timeline = {
    Design: <DesignTimeline />,
    Development: <DevelopmentTimeline />,
    Engineering: <EngineeringTimeline />,
  };

  return (
    <React.Fragment>
      {/*Section 1*/}
      <Section1
        title={xHomeHeroHeading}
        body={xHomeHeroBody}
        heroImage={heroImage}
        buttonText="GET STARTED"
        animation={heroAnimation}
      />

      {/*	Section 2*/}
      <Container maxWidth="lg">
        <Grid container className={classes.sec2}>
          <Grid className={classes.macbookDiv} item xs={12} md={8}>
            <div className={classes.macbookBgImage1} />
          </Grid>
          <Grid item xs={12} md={4} className={classes.macbookSide}>
            <div className={classes.divider} />
            <Typography variant={"h4"} color={"secondary"}>
              {xHomeSec2Heading}
            </Typography>
            <div className={classes.spacer4x} />
            <Typography color={"textSecondary"} variant="body1">
              {xHomeSec2text}
            </Typography>
            <div className={classes.spacer4x} />
            <Link href={"/services"}>
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
            <div className={classes.allServices}>
              <Lottie
                width={500}
                height={500}
                options={defaultOptions(AllServices)}
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      {/*    Section 3*/}
      <Grid container className={classes.sec3}>
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <Grid container justifyContent="center">
              <Grid item>
                <Typography align="center" variant="h4" color="secondary">
                  {xHomeSec3Heading}
                </Typography>
                <div className={classes.spacer4x} />
                <Typography
                  color={"textSecondary"}
                  align="center"
                  variant="body1"
                >
                  {xHomeSec3Text}
                </Typography>
                <div className={classes.spacer4x} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 100,
                  }}
                >
                  <Link href={"/services"}>
                    <a>
                      <Button
                        variant="outlined"
                        color="primary"
                        size={"large"}
                        endIcon={<ChevronRight />}
                      >
                        View Our Services
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container maxWidth="lg">
            <ServicesCards />
          </Container>
        </Grid>
      </Grid>

      {/*section 9*/}

      <Grid container className={classes.sec9}>
        <Grid item xs={12}>
          <Container maxWidth={"lg"}>
            <Grid container justifyContent={"center"} spacing={10}>
              <Grid item xs={12}>
                <Typography color={"secondary"} variant={"h4"} align={"center"}>
                  {xHomeSec9Heading}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Lottie options={defaultOptions(processAnimation)} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      {/*    Section 4*/}
      <Grid container className={classes.sec4}>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs md>
                <Typography align="center" variant="h4" color="secondary">
                  {xHomeSec4Heading}
                </Typography>
                <div className={classes.spacer4x} />
                <Typography
                  color={"textSecondary"}
                  align="center"
                  variant="body1"
                >
                  {xHomeSec4Text}
                </Typography>
                <div className={classes.spacer4x} />
                <div className={classes.spacer4x} />
                <div className={classes.spacer4x} />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} md={6}>
                <ImageCard
                  type={"Tourism"}
                  big
                  image={Jalanin}
                  title="Jalanin"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"e-Commerce"}
                      image={PixelBytes}
                      title={"Pixel Bytes"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Product Overview"}
                      image={WinePeace}
                      title={"Wine + Peace"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"e-Commerce"}
                      image={CosCatalog}
                      title={"Cos Catalog"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Portfolio"}
                      image={digiGem}
                      title={"digiGem"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageCard type={"Work"} big image={Jobster} title="Jobster" />
              </Grid>
              <Link href={"/portfolio"}>
                <a>
                  <Button
                    className={classes.sec4Button}
                    variant="outlined"
                    color="primary"
                    endIcon={<ChevronRight />}
                  >
                    See All Work
                  </Button>
                </a>
              </Link>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      {/*    Section 5*/}
      <Grid container className={classes.sec5}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid item xs md={4}>
                <Typography color="secondary" variant="h4">
                  {xHomeSec5Heading}
                </Typography>
                <div className={classes.spacer4x} />
                <Typography variant="body1" style={{ color: "#fff" }}>
                  {xHomeSec5Text}
                </Typography>
              </Grid>
              <Grid item xs md={8}>
                <div className={[classes.lottieDiv, "robo-lottie"].join(" ")}>
                  <Lottie
                    className={classes.roboLottie}
                    width={1000}
                    options={defaultOptions(ourProcessAnimation)}
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      {/*    section 6*/}
      <Grid container className={classes.sec6}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center">
              <Grid item xs>
                <Grid container justifyContent="center">
                  <Button
                    className={classes.buttonMargin}
                    color="primary"
                    variant={activeTab === "Design" ? "contained" : "outlined"}
                    onClick={() => setActiveTab("Design")}
                  >
                    Design
                  </Button>
                  <Button
                    className={classes.buttonMargin}
                    color="primary"
                    variant={
                      activeTab === "Development" ? "contained" : "outlined"
                    }
                    onClick={() => setActiveTab("Development")}
                  >
                    Development
                  </Button>
                  <Button
                    className={classes.buttonMargin}
                    color="primary"
                    variant={
                      activeTab === "Engineering" ? "contained" : "outlined"
                    }
                    onClick={() => setActiveTab("Engineering")}
                  >
                    Engineering
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: 100 }}>
                {timeline[activeTab]}
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      {/*    Section 7*/}
      <Grid container className={classes.sec7}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4" color="secondary" align="center">
                  Technologies We Use
                </Typography>
                <div className={classes.spacer4x} />
              </Grid>
              <Grid item xs={12}>
                <TechnologyCards />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      <Footer />
    </React.Fragment>
  );
}
