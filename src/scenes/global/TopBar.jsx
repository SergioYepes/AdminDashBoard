import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOnlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOnlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOnlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOnlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOnlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* searchBar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display="flex">
        <IconButton>
          {" "}
          <NotificationsOnlinedIcon />{" "}
        </IconButton>
        <IconButton>
          {" "}
          <SettingsOnlinedIcon />{" "}
        </IconButton>
        <IconButton>
          {" "}
          <PersonOnlinedIcon />{" "}
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOnlinedIcon />
          ) : (
            <LightModeOnlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
