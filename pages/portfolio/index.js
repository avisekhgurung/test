import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import heroImage from "../../public/portfolio.jpg";
import { xPortfolioSec1 } from "../../language/language";
import * as portfolioAnimation from "../../animations/portfolio-animation.json";
import Section1 from "../../components/Layout/Section1/Section1";
import Footer from "../../components/Layout/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import Jalanin from "../../public/Jalanin.jpg";
import PixelBytes from "../../public/Pixel-Bytes.jpg";
import WinePeace from "../../public/Wine-Peace.jpg";
import CosCatalog from "../../public/COS-Catalog.jpg";
import digiGem from "../../public/digiGem.jpeg";
import Jobster from "../../public/Jobster.jpg";
import Hudersfield from "../../public/huddersfield.jpg";
import Cuberto from "../../public/Cuberto.jpg";
import Rikza from "../../public/Rikza.jpg";
import SLAB from "../../public/SLAB.jpg";
import GraphicsByte from "../../public/GraphicsByte.jpg";
import Unno from "../../public/Unno.jpg";
import JoyHub from "../../public/JoyHub.jpg";
import Piqo from "../../public/Piqo.jpg";
import EndPlan from "../../public/End-Plan.jpg";

const useStyles = makeStyles((theme) => ({
  spacer6x: {
    marginTop: theme.spacing(6),
  },
  spacer3x: {
    marginTop: theme.spacing(3),
  },
  sec2: {
    marginTop: -220,
    marginBottom: 100,
  },
  servicesCard: {
    marginTop: 100,
  },
}));

export default function portfolio() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/*Section  1*/}
      <Section1
        title={"Portfolio"}
        body={xPortfolioSec1}
        heroImage={heroImage}
        animation={portfolioAnimation}
      />

      {/*  Section 2*/}
      <Grid container className={classes.sec2}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Tourism"}
                      image={Jalanin}
                      title="Jalanin"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"e-Commerce"}
                      image={PixelBytes}
                      title={"Pixel Bytes"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ImageCard
                  type={"Product Overview"}
                  big
                  image={WinePeace}
                  title={"Wine + Peace"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
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
              <Grid item xs={12} md={6} lg={4}>
                <ImageCard type={"Work"} big image={Jobster} title="Jobster" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard type={"Education"} image={SLAB} title={"SLAB"} />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard type={"Workout"} image={Rikza} title={"Rikza"} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Tourism"}
                      image={Cuberto}
                      title={"Cuberto"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Business"}
                      image={Hudersfield}
                      title={"Hudersfield"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Business"}
                      image={JoyHub}
                      title={"JoyHub"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Business"}
                      image={GraphicsByte}
                      title={"Graphics Byte"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard type={"Food"} image={Piqo} title={"Piqo"} />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"e-Commerce"}
                      image={Unno}
                      title={"Unno"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageCard type={"Work"} image={Jobster} title={"Moss"} />
                  </Grid>
                  <Grid item xs={12}>
                    <ImageCard
                      type={"Business"}
                      image={EndPlan}
                      title={"End Plan"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <Grid container spacing={2}>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <ImageCard big image={img1}  title="Moss" />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <Grid container spacing={2}>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <ImageCard big image={img1}  title="Moss" />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <Grid container spacing={2}>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <Grid container spacing={2}>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <Grid container spacing={2}>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <Grid container spacing={2}>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4}>*/}
              {/*  <Grid container spacing={2}>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12}>*/}
              {/*      <ImageCard image={img1}  title={"Moss"} />*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
            </Grid>
          </Container>
        </Grid>
      </Grid>

      {/*  Footer*/}
      <Footer />
    </React.Fragment>
  );
}
