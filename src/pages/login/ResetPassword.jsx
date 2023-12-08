import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { token } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        password,
        passwordConfirm,
      };
      console.log(data);
      const res = await axios.patch(
        `http://localhost:3000/api/users/resetPassword/${token}`,
        data,
        {
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

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
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Confirm Password"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Reset Password
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
