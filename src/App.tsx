import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import UserMap from "./views/UserMap";
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
import SideInfo from "./views/SideInfo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container>
        <UserMap />
        <SideInfo />
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
