import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;



  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <div>
      <Header
        color="transparent"
        logo={require("assets/img/logoWhite.png")}
        logoDark={require("assets/img/logo.png")}
        routes={dashboardRoutes}
        brand="The Passive Trust"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 120,
          color: "white"
        }}
        {...rest}
      />
      <Parallax checkPage={true} filter image={require("assets/img/hands.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={10} sm={10} md={6}>
              {isDesktop ? 
              <h1 className={classes.title}>Infrastructure services for a free and open future</h1>
              :
              <h2 className={classes.title}>Infrastructure services for a free and open future</h2>
              }
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
