import React from 'react'
import {Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Container } from '@material-ui/core';
import Carousel from './Carousel';


const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./123.jpg)",

  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));


function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
    <Container className={classes.bannerContent}>
      <div className={classes.tagline}>
        <Typography
          variant="h2"
          style={{
            color: "#ffffb3",
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
          }}
        >
          CRYPTO VIEW
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            color: "#ffffb3",
            textTransform: "capitalize",
            fontFamily: "Montserrat",
          }}
        >
          Get A Total View Of Crypyo Market
        </Typography>
      </div>
      <Carousel />
    </Container>
  </div>
);
}

export default Banner