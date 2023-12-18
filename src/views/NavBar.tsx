import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, FormControl, Select } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../imgs/Logo_VITRONIC_White.svg";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ color: "#333333", textTransform: "capitalize" }}
    >
      <MenuItem>map</MenuItem>
      <MenuItem>Operation date</MenuItem>
      <MenuItem>violation</MenuItem>
      <MenuItem>administration</MenuItem>
      <MenuItem>reports</MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#001E46" }}
        elevation={0}
      >
        <Toolbar>
          <img
            alt="vitronic-logo"
            src={logo}
            style={{ paddingBottom: 6, marginTop: 15, width: "160px" }}
          />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, p: 0 }}>
            <Button sx={{ color: "#FAFBFC", textTransform: "capitalize" }}>
              Map
            </Button>
            <Button
              sx={{ color: "#FAFBFC", textTransform: "capitalize", mr: 3 }}
            >
              Operation Date
            </Button>
            <Button
              sx={{ color: "#FAFBFC", textTransform: "capitalize", mr: 3 }}
            >
              violation
            </Button>
            <Button
              sx={{ color: "#FAFBFC", textTransform: "capitalize", mr: 3 }}
            >
              administration
            </Button>
            <Button
              sx={{ color: "#FAFBFC", textTransform: "capitalize", mr: 3 }}
            >
              reports
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>

          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: { md: 120, xs: 80 },
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
                <em>Language</em>
              </MenuItem>
              <MenuItem value={"e"}>English</MenuItem>
              <MenuItem value={"ar"}>Arabic</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

export default NavBar;
