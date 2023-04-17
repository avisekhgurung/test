import React from "react";
import {
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Logo from "../../../../public/Vebholic-logo.svg";
import { Close, MenuOpen } from "@material-ui/icons";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    top: "80px !important",
  },
}));

function CustomMenu(props) {
  const classes = useStyles();
  return <Menu classes={classes} {...props} />;
}

export default function MobileHeader() {
  const [open, setOpen] = React.useState(false);

  const handleMobileMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <Grid container justifyContent="space-around" style={{ padding: "10px 20px" }}>
      <Grid item xs>
        <Link href={"/"}>
          <a>
            <img src={Logo} width={190} alt="vebholic-logo" />
          </a>
        </Link>
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="flex-end">
          <IconButton onClick={handleMobileMenu}>
            {open ? <Close color="primary" /> : <MenuOpen color="primary" />}
          </IconButton>
          <CustomMenu
            keepMounted
            id="simple-menu"
            open={open}
            onClose={handleMobileMenu}
          >
            <MenuItem onClick={handleMobileMenu}>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMobileMenu}>
              <Link href={"/services"}>
                <a>Services</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMobileMenu}>
              <Link href={"/portfolio"}>
                <a>Portfolio</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMobileMenu}>
              <Link href={"/about"}>
                <a>About</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMobileMenu}>
              <a href="#contact">Contact</a>
            </MenuItem>
          </CustomMenu>
        </Grid>
      </Grid>
    </Grid>
  );
}
