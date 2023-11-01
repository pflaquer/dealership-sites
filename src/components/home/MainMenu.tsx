import {
  Call,
  Facebook,
  Google,
  LinkedIn,
  Mail,
  Twitter,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CountrySelect from "./CountrySelect";
import logo from "./logo_.webp";
import { NavLink } from "react-router-dom";
import { bgcolor } from "@mui/system";

function MainMenu() {
  return (
<div>
   <Box
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  height: "2rem",
                  background: "linear-gradient(90deg, rgba(43,45,66,1) 14%, rgba(2,0,36,0.85) 53%)",
                  width: "96px",
                }}
              />
           
              <NavLink to="/">
                <img
                  src={logo}
                  className="autologo"
                />
              </NavLink>
        </Box>
    </div>
    )
     
}

export default MainMenu;
