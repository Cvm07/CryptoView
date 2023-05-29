import React from 'react'
import { useState } from "react";
import { CryptoState } from "../CryptoContext";
import { HistoricalChart } from "../Config/api";
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import { chartDays } from "../Config/Data";
import axios from 'axios';
import { CircularProgress } from "@material-ui/core";
import { createTheme}  from "@material-ui/core";
import Selectbutton from './Selectbutton';
import Chart from 'chart.js/auto';


const Coininfo = ({ coin }) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    
    
    const { currency } = CryptoState();
    const [flag,setflag] = useState(false);


    const useStyles = makeStyles((theme) => ({
        container: {
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          padding: 40,
          [theme.breakpoints.down("md")]: {
            width: "100%",
            marginTop: 0,
            padding: 20,
            paddingTop: 0,
          },
        },
      }));


      const classes = useStyles();


    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setflag(true);
        setHistoricData(data.prices);
      };

      console.log(coin);

      useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [days]);


      const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });


      return (
        <ThemeProvider theme={darkTheme}>
          <div className={classes.container}>
            {!historicData | flag===false ? (
              <CircularProgress
                style={{ color: "yellow" }}
                size={250}
                thickness={1}
              />
            ) : (
              <>
                <Line
                  data={{
                    labels: historicData.map((coin) => {
                      let date = new Date(coin[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),
    
                    datasets: [
                      {
                        data: historicData.map((coin) => coin[1]),
                        label: `Price ( Past ${days} Days ) in ${currency}`,
                        borderColor: "#EEBC1D",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 1,
                      },
                    },
                  }}
                />
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    marginTop: 20,
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  {chartDays.map((day) => (
                    <Selectbutton
                      key={day.value}
                      onClick={() => {setDays(day.value);
                        setflag(false);
                      }}
                      selected={day.value === days}
                    >
                      {day.label}
                    </Selectbutton>
                  ))}
                </div>
              </>
            )}
          </div>
        </ThemeProvider>
      );
    };

export default Coininfo;