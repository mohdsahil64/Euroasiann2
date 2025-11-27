import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Fade,
} from "@mui/material";

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  const handleToggle = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://www.hdwallpapers.in/download/cruise_ship_on_blue_ocean_with_blue_sky_background_hd_cruise_ship-HD.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: { xs: "90%", sm: 400 },
          p: 4,
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          bgcolor: "rgba(255,255,255,0.85)",
        }}
      >
        {/* Logo / Header */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Euroasiann Group ⚓
        </Typography>

        {/* Animated Form */}
        <Fade in={mode === "login"} timeout={500} unmountOnExit>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" align="center" gutterBottom>
              Welcome Back
            </Typography>
            <TextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, borderRadius: 2 }}
            >
              Login
            </Button>
            <Typography
              align="center"
              sx={{ mt: 2, cursor: "pointer", color: "primary.main" }}
              onClick={handleToggle}
            >
              Don’t have an account? Sign Up
            </Typography>
          </Box>
        </Fade>

        <Fade in={mode === "signup"} timeout={500} unmountOnExit>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" align="center" gutterBottom>
              Create Account
            </Typography>
            <TextField
              fullWidth
              label="Enter Your Email"
              name="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Create Password"
              name="password"
              type="password"
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, borderRadius: 2 }}
            >
              Sign Up
            </Button>
            <Typography
              align="center"
              sx={{ mt: 2, cursor: "pointer", color: "primary.main" }}
              onClick={handleToggle}
            >
              Already have an account? Login
            </Typography>
          </Box>
        </Fade>

        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{ mt: 3 }}
        >
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Typography>
      </Paper>
    </Grid>
  );
}
