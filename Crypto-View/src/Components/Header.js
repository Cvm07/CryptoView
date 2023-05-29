import { AppBar, Container } from '@material-ui/core'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { CryptoState } from '../CryptoContext';
import { MenuItem } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(()   => ({
  title: {
    flex: 2,
    color: "yellow",
    fontFamily:"Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));
const darkTheme = createTheme({
  palette: {
    primary: {
      main:  "#00111a",
    },
    type: "dark",
  },
});

const Header = () => {
   
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  
  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position='static'>
      <Container>
      <Toolbar>
    <Typography  onClick={() => history.push(`/`)}
              className={classes.title}>
      CRYPTO VIEW
    </Typography>
    <Select 
    variant="outlined"
    value={currency}
    onChange={(e) => setCurrency(e.target.value)}
    style={{
      width: 100,
      Height: 40,
      marginReft: 15
    }}>
      <MenuItem value={"USD"}>USD</MenuItem>
      <MenuItem value={"INR"}>INR</MenuItem>

    </Select>
    <Button color="inherit">Login</Button>
  </Toolbar>
  </Container>
    </AppBar>
   </ThemeProvider>
  )
}

export default Header