import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/List";
import Palette from "@material-ui/icons/FormatListNumbered";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/logo2.png";


import styles from "assets/jss/material-kit-react/views/about.js";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function AboutPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

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
          height: 150,
          color: "white"
        }}
        {...rest}
      />
      <Parallax  checkPage={true} filter image={require("assets/img/peeps.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}>About</h2>
                    <hr className={classes.hr}></hr>
                  </div>
                </div>
              </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <div className={classes.description}>
              <h4>
                                     The Passive Trust was launched on the 19th of November 2019. After being involved in the blockchain industry since mid 2017 we decided to run a staking pool for <a href="https://theoan.com/">
                 The Open Application Network</a>. Having been on the Aion User Advisory Board since inception it is product that resonates with our mission. To create a prosperous and fair future for all. The pool was initially created with 1000 Aion that was given as a gift by Matt Spoke and the Aion Foundation for the dedication towards the community before the transition and launch of The Open Application Network.


              </h4>
              <br/>
              <br/>

               <h4>
              Since our humble beginnings, we have been working on creating other solutions and building our base of knowledge on the needs to help bring the future we want. We are not alone in our mission and collaboration is key. This is why we are helping to provide other services to networks that resonate our values. Like all endeavors that break the norm, it will be a long path and will lead to a destination we could have never imagined whilst taking the first step. 
               

              </h4>

                <br/>
                <br/>

               <h4>
                       Come walk along aside us!
               

              </h4>
            </div>
             </GridItem>
          </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}