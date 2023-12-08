import { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Stack,
  Grid,
} from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  //   const [resetSent, setResetSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Stack
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
            onChange={handleEmailChange}
          />
          <Grid container justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </Stack>
        {/* )} */}
      </Stack>
    </Container>
  );
};

export default ForgotPassword;
