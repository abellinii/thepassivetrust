import { container, title } from "assets/jss/material-kit-react.js";
import Background from "assets/img/mina_background.png"
import NearBackground from "assets/img/near_group.png"

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container:{
    margin:"0",
    padding:"0",

  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  hr :{ 
  display: "block",
  marginTop: "0.5em",
  marginBottom: "3em",
  marginLeft: "auto",
  marginRight: "auto",
  borderStyle: "inset",
  borderWidth: "1px"
},
  backColor:{
    backgroundColor:"#E1DCCD"
  },
  containered: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
},
  video: {
    objectFit: "cover",
    width: "100%",
    position:"absolute",
    top:"0",
    left:"0"
  },
  celoLogo:{
    position:"absolute",
    top:"0",
    left:"33%",
    width:"33%",
    zIndex:"3",
    paddingTop:"3%"


  },
  AionLogo:{
    position:"absolute",
    top:"-5%", 
    left:"40%",
    width:"20%",
    zIndex:"3",
   


  },
  AionLogoM:{
    position:"absolute",
    top:"-8%", 
    left:"33%",
    width:"35%",
    zIndex:"3",
   


  },

  imageVal2:{
 
    position:"absolute",
    bottom:"0",
    left:"3%",
    zIndex:"3",
    width:"33%"
    
  },
  centerText:{
  
},

  imageVal:{
  
    position:"absolute",
    bottom:"0",
    left:"36%",
    zIndex:"3",
    width:"30%"
    
  },

  imageVal3:{
  
    position:"absolute",
    marginTop:"40%",
    bottom:"0",
    left:"66%",
    zIndex:"3",
    width:"30%"
    
  },



item: {
  height: "40px",
  marginBottom: "10%"
},
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  CeloBody:{
    overflow:"auto",
    backgroundColor:"rgb(39,45,48)",
    height:"max-content",
    minHeight:"100vh",
    width:"100%",
    position:"relative",
    marginTop:"10%",
    zIndex:"2"
  },

  CeloBodyM:{
    overflow:"auto",
    backgroundColor:"rgb(39,45,48)",
    height:"1vh",
    minHeight:"170vh",
    width:"100%",
    position:"relative",
    marginTop:"1%",
    zIndex:"2"
  },

  NearBodyM:{
    overflow:"auto",
    minHeight:"200vh",
    height:"120vh",
    width:"100%",
    position:"relative",
    marginBottom:"1%",
    zIndex:"2"
  },
  NearBody:{
    overflow:"auto",
    minHeight:"100vh",
    height:"max-content",
    width:"100%",
    position:"relative",
    marginBottom:"10%",
    zIndex:"2"
  },
  NearImage:{
    opacity:"0.2",
    backgroundImage: "url(" + NearBackground + ")",
    minHeight:"100vh",
    height:"max-content",
    width:"100%",
  },
  NearImageM:{
    opacity:"0.2",
    backgroundImage: "url(" + NearBackground + ")",
    position:"absolute",
  },
  MinaBodyM:{
    overflow:"auto",
    backgroundImage: "url(" + Background + ")",
    minHeight:"200vh",
    height:"120vh",
    width:"100%",
    position:"relative",
    zIndex:"2"
  },

  MinaBody:{
    overflow:"auto",
    backgroundImage: "url(" + Background + ")",
    minHeight:"100vh",
    height:"max-content",
    width:"100%",
    position:"relative",
    marginBottom:"1%",
    zIndex:"2"
  },

  BodyTextAion:{
    fontSize:"5em",
    padding:"3%",
    width:"80%",
    position:"absolute",
    top:"15%",
    left:"10%",
    
    zIndex:"4"
  },
  BodyTextCelo:{
    color:"white",
    width:"80%",
   paddingBottom:"15%",
    position:"absolute",
    top:"15%",
    left:"10%",
    zIndex:"4"
  },

  BodyTextAionM:{
    fontSize:"5em",
    padding:"3%",
    width:"80%",
    position:"absolute",
    top:"10%",
    left:"10%",
    
    zIndex:"4"
  },
  BodyTextCeloM:{
    color:"white",
    width:"80%",
   paddingBottom:"20%",
    position:"absolute",
    top:"10%",
    left:"10%",
    zIndex:"4"
  },
  image:{
    // margin:"10%",
    // height:"12%",
    // width:"33%",
    // position:"absolute",
    // top:"5%",
    // left:"40%",
    // zIndex:"3",
    
  },

  shade:{
    backgroundColor:"rgba(46, 51, 56, 0.7)",
    overflow:"show",
    height:"inherit",
    width:"100%",
    position:"absolute",
    zIndex:"2",
    top:"0",
    left:"0"
  },
 
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default profilePageStyle;
