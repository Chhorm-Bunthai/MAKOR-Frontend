import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useAuthContext from "../../hooks/useAuth";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { token } = useParams();
  const { resetPassword } = useAuthContext();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    resetPassword(password, passwordConfirm, token);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginTop: "100px", padding: "20px" }}
    >
      <Typography variant="h4">Reset Password</Typography>
      <Typography>Please Enter your new password</Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          margin="normal"
          required
          fullWidth
          variant="outlined"
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

        <TextField
          style={{ marginBottom: "30px" }}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          name="passwordConfirm" // This should match the property name in the data state
          autoComplete="new-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Reset Password
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
