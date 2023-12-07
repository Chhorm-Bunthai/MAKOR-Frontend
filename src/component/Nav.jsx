import { Link } from "react-router-dom";
import {
  Card,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleProfile }) => {
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
              <IconButton color="inherit" onClick={toggleProfile}>
                <AccountCircle />
              </IconButton>
            </Link>
            <Link className="logo" to="/logout">
              <IconButton color="inherit">
                <ExitToApp />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
