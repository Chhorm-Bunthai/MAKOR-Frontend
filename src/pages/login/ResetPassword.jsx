import { useState } from "react";
import { TextField, Container, Typography } from "@mui/material";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  //   const handleResetClick = () => {
  //     // Here, you would typically make an API call to reset the password
  //     // For demonstration purposes, we'll just set a flag to simulate it
  //     onResetPassword();
  //   };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginTop: "100px", padding: "20px" }}
    >
      <Typography variant="h5">Reset Password</Typography>
      <Typography>
        Enter a new password for your account associated with{" "}
        {/* {email || "your email"}. */}
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="New Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {/* <Button variant="contained" color="primary" onClick={handleResetClick}> */}
      Reset Password
      {/* </Button> */}
    </Container>
  );
};

export default ResetPassword;
