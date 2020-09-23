import React, { useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CountUp from "react-countup"
import axios from "axios"

import styles from "assets/jss/material-kit-react/views/statisticsPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function StatisticsPage(props) {
   const [data, setData] = useState(0);
   const [complete, setComplete] = useState(false);
   const [lastBlock, setLastBlock] = useState(0);
   const [tPTvalidatedBlocks, setTPTvalidatedBlocks] = useState(0);
   const [selfStake, setSelfStake] = useState(0);
   const [totalStake, setTotalStake] = useState(0);
   const [stakePending, setStakePending] = useState(0);
   

    useEffect(() => {
    var result = null; 
   var myValidatedBlocks = null;
   var myValidatorInfo = null;
    async function getData(){
     result = await axios(
      'https://mainnet-api.theoan.com/aion/dashboard/getAccountDetails?accountAddress=a0733306c2ee0c60224b0e59efeae8eee558c0ca1b39e7e5a14a575124549416',
    );

    //  myValidatedBlocks = await axios(
    //   'https://mainnet-api.theoan.com/aion/dashboard/getBlocksMinedByAddress?searchParam=a0221d8b92611c365d82661e8ebc8050a890350010e5744433f1a5ff679abad3&page=0',
    // );

    //   validatorStatistics = await axios(
    //   'https://mainnet-api.theoan.com/aion/v2/dashboard/validatorStatistics',
    // );
    myValidatorInfo = await axios(
      'https://splashy-watercress.glitch.me/pools',
    );


    setData(parseInt(result.data.content[0].balance));
    setLastBlock(result.data.content[0].lastBlockNumber); 
    setTPTvalidatedBlocks(myValidatorInfo.data.POSBlocks);
    setSelfStake(myValidatorInfo.data.selfStake);
    setTotalStake(myValidatorInfo.data.stakeTotal);
    setStakePending(myValidatorInfo.data.stakePending);
   }
   getData();
     
  
  }, []);


 
  const classes = useStyles();
  const { ...rest } = props;
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
          height: 40,
          color: "white"
        }}
        {...rest}
      />
      {/*//Background/*/}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >

        {/*//Body*/}
        <div className={classes.container}>
     \
            {/*//Waiting for api

            //      <GridItem xs={11} sm={11} md={11} className={classes.center}>
            // <h2>Combined stakers</h2>
            //    <hr className={classes.hr}></hr>
            // </GridItem>
         
           
            // <GridItem xs={11} sm={11} md={4} className={classes.center}>
            // <p>Total blocks validated</p>
            // <p>0</p>
            // </GridItem>
            // <GridItem xs={11} sm={11} md={4} className={classes.center}>
            // <p>Total blocks validated</p>
            // <p>0</p>
            // </GridItem>
            // <GridItem xs={11} sm={11} md={4} className={classes.center}>
            // <p>Total blocks validated</p>
            // <p>0</p>
            //</GridItem>
          */}

            
       
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}










