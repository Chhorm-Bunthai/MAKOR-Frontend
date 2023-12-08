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
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h5">Forgot Password</Typography>
        {/* {resetSent ? ( */}

        <Stack spacing={2}>
          <Typography>
            Enter your email address, and we will send you a link to reset your
            password.
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ForgotPassword;
