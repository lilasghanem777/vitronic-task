import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import GoogleMapReact from "google-map-react";
import redAlert from "../imgs/Icon_Alert_Red.svg";
import yellowAlert from "../imgs/Icon_Alert_Amber.svg";
import PieChart from "./PieChart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function UserMap() {
  const isMounted = React.useRef(false);
  const points = [
    { id: 1, title: "Round Pond", lat: 39.925533, lng: 32.866287 },
  ];

  const markerInfoTable = [
    { col1: "89%", col2: "Project Status", col3: true },
    { col1: "Dec 2024", col2: "Delivery Delayed to", col3: false },
    { col1: "89%", col2: "Payment due date", col3: true },
    {
      col1: "Blocker:",
      col2: "Please call ROP for a clear instruction on how to resolve all payments",
      col3: false,
    },
  ];

  const center = {
    lat: 39.925533, // default latitude
    lng: 32.866287, // default longitude
  };

  var markerInfo: string = "";

  React.useEffect(() => {
    if (isMounted.current == false) {
      markerInfoTable.map((info) => {
        markerInfo =
          markerInfo +
          `<tr>
          <td>${info.col1}</td>
          <td>${info.col2}</td>
          <td>
            <img src="${info.col3 ? redAlert : yellowAlert}" />
          </td>
        </tr>`;
      });
      isMounted.current = true;
    }
  }, []);

  const renderPolylines = (map: any, maps: any) => {
    //places is an object array with latitude and longitude
    points.map((place) => {
      new maps.Marker({
        position: {
          lat: place.lat,
          lng: place.lng,
        },
        map,
      });
      new maps.InfoWindow({
        position: {
          lat: place.lat,
          lng: place.lng,
        },
        content: `<table style="text-align:left">
            <tr >
              <th>KSA</th>
              <th></th>
              <th style="display: grid;grid-template-columns: auto auto">
                <img src="${yellowAlert}" />
                <img src="${redAlert}" />
              </th>
            </tr>
            ${markerInfo}
          </table>`,
        map,
      });
    });
  };
  return (
    <Grid
      item
      md={8}
      sm={12}
      xs={12}
      sx={{ position: "relative", color: "#001e46" }}
    >
      <Box className=" overflow_chart">
        <Box
          sx={{
            p: 1,
            borderBottom: "2px solid #001e46",
            fontWeight: "600",
          }}
        >
          Hardware
        </Box>
        <PieChart />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={-8}
          p={1}
          sx={{ fontSize: "12px" }}
        >
          <Grid item>
            Not Paid
            <br />
            <span
              style={{ fontSize: "24px", fontWeight: "700", color: "#B00020" }}
            >
              50%
            </span>
          </Grid>
          <Grid sx={{ width: "50%" }}>
            <ArrowUpwardIcon sx={{ color: "#5DAE95", mb: -0.5 }} />
            <span style={{ fontSize: "18px", fontWeight: "700" }}>75%</span>
            <hr style={{ margin: "1px" }} />
            Deliver risk
            <br />
            100% | 50%
            <br />
            Software Hardware
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ width: "100%", height: { md: "100%", sm: "600px", xs: "500px" } }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDpiZ51-DT0vGpwRV2cbAo4TafASvtHVt0" }}
          zoom={10}
          defaultCenter={center}
          onGoogleApiLoaded={({ map, maps }) => renderPolylines(map, maps)}
        ></GoogleMapReact>
      </Box>
    </Grid>
  );
}

export default UserMap;
