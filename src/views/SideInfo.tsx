import React from "react";
import {
  Box,
  Grid,
  LinearProgressProps,
  LinearProgress,
  Typography,
} from "@mui/material";
import LineChart from "./LineChart";
import redAlert from "../imgs/Icon_Alert_Red.svg";
import yellowAlert from "../imgs/Icon_Alert_Amber.svg";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
      <Box sx={{ minWidth: 25 }}>
        <Typography variant="body2">{`${Math.round(props.value)}%`}</Typography>
      </Box>
      <Box className="review_progress" sx={{ width: "90%", ml: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "10px", backgroundColor: "#a4abb0 " }}
        />
      </Box>
    </Box>
  );
}

const SideInfo = () => {
  return (
    <Grid
      item
      md={4}
      sm={12}
      xs={12}
      sx={{ backgroundColor: "#E8EBED", color: "#001e46" }}
      p={2}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="headTable"
        pr={1}
        pl={1}
        mt={2}
      >
        <Grid item>Sales</Grid>
        <Grid item>Finance</Grid>
        <Grid item>Project</Grid>
        <Grid item>Software</Grid>
        <Grid item>Service</Grid>
      </Grid>
      <Box>
        <Box
          sx={{ mt: 4, borderBottom: "2px solid #001e46", fontWeight: "600" }}
        >
          Total Implementaton and Acceptence Device
        </Box>
        <LineChart />
      </Box>
      <Box>
        <Box
          sx={{ mt: 4, borderBottom: "2px solid #001e46", fontWeight: "600" }}
        >
          Total Implementaton and Acceptence Device
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ fontSize: "12px", borderBottom: "1px solid #001e46" }}
          p={0.5}
        >
          <Grid item xs={5.5}>
            Delivery of fixed speed camera -324 units
          </Grid>
          <Grid item xs={5.5} sx={{ fontWeight: "700", color: "#B00020" }}>
            291 installed out of 324 <br />
            SAT Signed: 240
          </Grid>
          <Grid item xs={1}>
            <img src={redAlert} style={{ width: "20px" }} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ fontSize: "12px", borderBottom: "1px solid #001e46" }}
          p={0.5}
        >
          <Grid item xs={5.5}>
            Delivery of fixed speed camera -324 units
          </Grid>
          <Grid item xs={5.5} sx={{ fontWeight: "700" }}>
            291 installed out of 324 <br />
            SAT Signed: 240
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ fontSize: "12px", borderBottom: "1px solid #001e46" }}
          p={0.5}
        >
          <Grid item xs={5.5}>
            Delivery of fixed speed camera -324 units
          </Grid>
          <Grid item xs={5.5} sx={{ fontWeight: "700", color: "#E6932B" }}>
            291 installed out of 324 <br />
            SAT Signed: 240
          </Grid>
          <Grid item xs={1}>
            <img src={yellowAlert} style={{ width: "20px" }} />
          </Grid>
        </Grid>
      </Box>

      <Box>
        {" "}
        <Box
          sx={{ mt: 6, borderBottom: "2px solid #001e46", fontWeight: "600" }}
        >
          Material Status
        </Box>
        <LinearProgressWithLabel value={80} />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="headTable"
          pr={1}
          pl={1}
          mt={6}
        >
          <Grid item>
            Total Devices
            <br />
            <span
              style={{ fontSize: "20px", fontWeight: "700", color: "#00B3FF" }}
            >
              300
            </span>
          </Grid>
          <Grid item>
            Implementation
            <br />
            <span
              style={{ fontSize: "20px", fontWeight: "700", color: "#5DAE95" }}
            >
              200
            </span>
          </Grid>
          <Grid item>
            Acceptence
            <br />
            <span
              style={{ fontSize: "20px", fontWeight: "700", color: "#E6932B" }}
            >
              150
            </span>
          </Grid>
          <Grid item>
            Live <br />
            <span style={{ fontSize: "20px", fontWeight: "700" }}>150</span>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SideInfo;
