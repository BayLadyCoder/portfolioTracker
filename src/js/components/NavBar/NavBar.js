import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MenuIcon from "@material-ui/icons/Menu";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const NavBar = ({ handleOpenNewAccModal }) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(isOpen);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="menu"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["All Accounts", "Add New Account", "Add Daily Report"].map(
          (text, index) => (
            <ListItem button key={text} onClick={() => handleOpenNewAccModal()}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountBoxIcon /> : <AssessmentIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Etrade", "Account Overview", "Add Daily Report"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <AddIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div style={styles.headerContainer}>
      <h1>Portfolios Tracker</h1>

      <div style={styles.buttonContainer}>
        {/* <button style={styles.addBtn}>+</button> */}
        {/* <button style={styles.hamburgerMenuBtn}>&#9776;</button> */}
        {/* <button style={styles.addNewAccountBtn}>+ Add New Account</button>
          <button style={styles.addNewAccountBtn}>+ Add Daily Report</button> */}
        <div>
          <React.Fragment>
            <Button onClick={toggleDrawer(true)} style={{ color: "#ffffff" }}>
              <MenuIcon />
            </Button>
            <Drawer
              anchor="right"
              open={menuOpen}
              onClose={toggleDrawer(false)}
              style={{ color: "#ffffff" }}
            >
              {list(menuOpen)}
            </Drawer>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#000000",
    borderBottom: "solid 1px #3d3d3d",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  hamburgerMenuBtn: {
    color: "#000000",
    backgroundColor: "#ffffff",
    fontSize: "30px",
    padding: "0 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  addBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    fontSize: "45px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",

    color: "#000000",
    borderColor: "#ffffff",
    //focus none
  },
  addNewAccountBtn: {
    padding: "5px 15px",
    fontSize: "18px",
    borderRadius: "20px",
  },
};

export default NavBar;
