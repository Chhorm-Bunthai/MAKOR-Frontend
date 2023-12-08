import { Link } from "react-router-dom";
import axios from "axios";
import {
  // Card,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const handleClick = async () => {
    try {
      await axios.get("http://localhost:3000/api/users/logout", {
        withCredentials: true,
      });
      console.log("logged out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography
            className="toggle"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 2 }}
          >
            <Link className="logo" to="/">
              Nika E-Commerce
            </Link>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link className="logo" to="/login">
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Link>
            <IconButton color="inherit" onClick={handleClick}>
              <ExitToApp />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
