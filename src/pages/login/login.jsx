import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
import useAuthContext from "../../hooks/useAuth";

const defaulTheme = createTheme();

export default function LogIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResult = await Login(email, password);
      if (!email || !password) {
        return console.log("Please fill in everything");
      } else if (loginResult){
          navigate("/");
      } else {
          navigate("/login");
        }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={defaulTheme}>
      <Container component="main" maxwidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h2" sx={{ fontWeight: "bold" }}>
            Log in
          </Typography>
          <Typography>Welcome back!</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email "
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              fullWidth
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid item xs>
                <Link to="/forgotPass">Forgot password?</Link>
              </Grid>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Grid item>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ textDecoration: "none" }}
                >
                  Create an account ?
                </Typography>
              </Grid>
              <Grid item sx={{ marginRight: 2 }}></Grid>
              <Grid item>
                <Typography color="primary" component="span" variant="body2">
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
