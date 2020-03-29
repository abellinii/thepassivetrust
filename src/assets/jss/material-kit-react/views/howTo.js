import { container, title } from "assets/jss/material-kit-react.js";

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
  AiomLogo:{
    position:"absolute",
    paddingTop:"10%",
    left:"33%",
    width:"33%",
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
  placeOne:{
    overflow:"auto",
    backgroundColor:"rgb(39,45,48)",
    height:"max-content",
    minHeight:"60vh",
    width:"100%",
    position:"relative",
    marginTop:"10%",
    zIndex:"2"
  },

  placeTwo:{
    overflow:"auto",
    background: "linear-gradient(90deg, rgba(245,65,25,1) 0%, rgba(245,65,25,1) 10%, rgba(254,83,2,1) 10%, rgba(255,85,0,1) 10%, rgba(255,120,0,1) 10%, rgba(255,120,0,1) 20%, rgba(255,127,0,1) 20%, rgba(255,149,0,1) 30%, rgba(255,155,0,1) 30%, rgba(255,159,0,1) 40%, rgba(255,185,0,1) 40%, rgba(255,185,0,1) 100%)",
    minHeight:"60vh",
    height:"max-content",
    width:"100%",
    position:"relative",
    marginBottom:"10%",
    zIndex:"2"
  },
  BodyTextAion:{
    fontSize:"5em",
    padding:"3%",
    width:"80%",
    position:"absolute",
    top:"20%",
    left:"10%",
    
    zIndex:"4"
  },
  BodyTextCelo:{
    color:"white",
    width:"80%",
   paddingBottom:"15%",
    position:"absolute",
    top:"20%",
    left:"10%",
    zIndex:"4"
  },
  image:{
    margin:"10%",
    height:"12%",
    width:"33%",
    position:"absolute",
    top:"10%",
    left:"40%",
    zIndex:"3",
    
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
