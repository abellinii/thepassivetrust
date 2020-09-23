import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();


  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          

          {isDesktop ? 
              <h2 className={classes.title}>Providing solutions to enable the collective goal of worldwide prosperity</h2>
              :
              <h3 className={classes.title}>Providing solutions to enable the collective goal of worldwide prosperity</h3>
              }
          <h5 className={classes.description}>
          Running and taking care of the infrastructure needed to create a fair and decentralized future takes time, commitment and hard work. We provide an efficient, low-cost solution for others who don't have the time but still want to contribute. 
          We have a range of expertise to help keep blockchains decentralized and secure. We can help with lightweight, efficient, secure infrastructure.
          
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Talk to us"
              description="Contact us with any questions, needs or opinions "
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Solutions"
              description="Work with us"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Infrastructure and Security"
              description="We provide world class secure cloud infrastructure that is regularly audited"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
