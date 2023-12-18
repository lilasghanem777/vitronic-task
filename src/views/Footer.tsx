import * as React from "react";
import { Box, Grid, MenuItem, Select, FormControl } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#001E46",
        position: "relative",
        width: "100%",
        marginTop: "auto",
        color: "white",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ textAlign: "center", fontSize: "12px", fontWeight: "400" }}
      >
        <Grid item md={2} sm={3} xs={12}>
          Vitronic
        </Grid>
        <Grid item md={8} sm={6} xs={12}>
          Measurment unit detectedon on fixed-speed
        </Grid>
        <Grid item md={2} sm={3} xs={12}>
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 80,
              color: "white",
              borderBottom: "1px solid white",
            }}
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={"e"}
              size="small"
              sx={{ color: "white", fontSize: "12px" }}
            >
              <MenuItem value="">
                <em>Name</em>
              </MenuItem>
              <MenuItem value={"e"}>Rashed</MenuItem>
              <MenuItem value={"ar"}>Mhd</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
