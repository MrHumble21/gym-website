import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.jpg";
function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link style={{ textDecoration: "none" }} to="/">
        <Typography
          sx={{ fontSize: { lg: "28px", xs: "18px" } }}
          color="#FF2625"
          fontWeight="600"
        >
          Power Zone
        </Typography>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
