import React from "react";

const NavBar = () => {
  return (
    <div style={styles.headerContainer}>
      <h1>Portfolios Tracker</h1>

      <div style={styles.buttonContainer}>
        {/* <button style={styles.addBtn}>+</button> */}
        <button style={styles.hamburgerMenuBtn}>&#9776;</button>
        {/* <button style={styles.addNewAccountBtn}>+ Add New Account</button>
          <button style={styles.addNewAccountBtn}>+ Add Daily Report</button> */}
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
