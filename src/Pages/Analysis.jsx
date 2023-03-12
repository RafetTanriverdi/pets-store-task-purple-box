import React from 'react'
import ChartOne from '../Components/ChartOne'
import ChartGeo from '../Components/ChartGeo'
import ChartNivo from '../Components/ChartNivo'
import ChartPie from '../Components/ChartPie'
import ChartRadial from '../Components/ChartRadial'
import { Typography } from '@mui/material'

function Analysis() {
  return (
    <div >
      <div style={{ display: "flex" }}>

        <div style={{ height: "290px", background: "#fff", paddingBottom: "35px", width: "40%", margin: "25px", paddingTop: "15px" }}>
          <Typography variant="h5" textAlign="center" >

            Rate of pets in the USA

          </Typography>
          <ChartPie />
        </div>
        <div style={{ height: "290px", background: "#fff", paddingBottom: "35px", width: "60%", margin: "25px", paddingTop: "15px" }}>
          <Typography variant="h5" textAlign="center" >

            Pets Popular In USA

          </Typography>
          <ChartOne />
        </div>


        <div>

        </div>
      </div>

      <div style={{ display: "flex", }}>

        <div style={{ height: "600px", background: "#fff", padding: "45px 0", width: "50%", margin: "0 25px",  }}>
          <Typography variant="h5" textAlign="center" marginBottom="5px" >

          Pet Population In Countries

          </Typography>

          <ChartGeo />
        </div>

        <div style={{ flexDirection: "column", width: "50%" }}>

          <div style={{ height: "350px", background: "#fff", margin: "5PX 25px", padding: "15px" ,paddingBottom: "40px" }}>
            <Typography variant="h5" textAlign="center" marginBottom="5px" >

            Daily Added Pet Population

            </Typography>

            <ChartNivo />

          </div>
          <div style={{ height: "250px", background: "#fff", margin: "5PX 25px", padding: "15px",paddingBottom: "40px" ,marginBottom:"25px"}}>
            <Typography variant="h5" textAlign="center" marginBottom="5px" >

            The Favorites Pets

            </Typography>


            <ChartRadial />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Analysis