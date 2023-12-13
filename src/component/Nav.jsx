import { Link } from "react-router-dom";
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
import useAuthContext from "../hooks/useAuth";

const Navbar = () => {
  const { LogOut } = useAuthContext();
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
            <Link className="logo">Nika E-Commerce</Link>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link className="logo" to="/login">
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Link>
            <IconButton color="inherit" onClick={() => LogOut()}>
              <ExitToApp />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
