import { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email,
      };
      const res = await axios.post(
        "http://localhost:3000/api/users/forgotPassword",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      console.log(email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Stack
        onSubmit={handleSubmit}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "30px", marginTop: "20PX", fontWeight: "bold"}}>Forgot Password</Typography>
        {/* {resetSent ? ( */}

        <Stack spacing={2} >
          <Typography>
            Enter your email address, and we will send you a link via your email to reset your
            password.
          </Typography>
          {/* <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          /> */}
          <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
          <Grid container justifyContent="start">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
              >
                send
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ForgotPassword;
