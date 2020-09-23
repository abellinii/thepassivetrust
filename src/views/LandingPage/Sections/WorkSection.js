import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";


  
      
const useStyles = makeStyles(styles);





export default function WorkSection() {
  const classes = useStyles();
  const [mailSent, setMailSent] = useState(false);

  

var sendEmail = () => {
  setMailSent(!mailSent);
  var fromAddress = document.getElementById("email").value;
  var emailSubject = document.getElementById("name").value;
  var emailText = document.getElementById("message").value;
  console.log("we are in" + emailSubject + " " +fromAddress + " " + emailText)
  fetch('https://splashy-watercress.glitch.me/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: emailSubject,
      email: 'thepassivetrust@gmail.com',
      message: emailText,
      cc: fromAddress
    })
  })
//  .then((res) => res.json())
  .then((res) => {
    console.log('here is the response: ', res);
  })
  .catch((err) => {
    console.error('here is the error: ', err);
  })
 }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">


      {!mailSent ?
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
          If you have any questions, would like to contribute or join the community please contact us.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                 
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
              
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
              
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary" onClick={sendEmail}>Send Message</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
        :
        <GridItem cs={12} sm={12} md={8}>
        <h4 className={classes.title}>Thankyou! We will be in touch shortly</h4>
      </GridItem>}

      </GridContainer>
    </div>
  );
}
