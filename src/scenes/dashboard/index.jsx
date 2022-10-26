import React from 'react'
import Header from '../../components/Header'
import {Typography, Box, useTheme} from "@mui/material";

function Index() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subTitle="Welcome to Your Dashboard"
          />
      </Box>
    </Box>
  )
}

export default Index