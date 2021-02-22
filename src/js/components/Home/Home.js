import React from "react";
import AccountTable from "../AccountTable";
import AllAccountsTable from "../AllAccountsTable";
import { eTrade, weBull, accounts } from "../../database";
import NavBar from "../NavBar";

const Home = () => {
  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.accountContainer}>
        <h2 style={styles.tableHeadPrimary}>All Accounts</h2>
        <AllAccountsTable accounts={accounts} />
      </div>
      <div style={styles.accountContainer}>
        <h2 style={styles.tableHeadSecondary}>Etrade</h2>
        <AccountTable account={eTrade} />
      </div>
      <div style={styles.accountContainer}>
        <h2 style={styles.tableHeadSecondary}>Webull</h2>
        <AccountTable account={weBull} />
      </div>
    </div>
  );
};

const styles = {
  accountContainer: {
    margin: "30px 20px",
  },
  tableHeadPrimary: {
    // color: "#ff3dae",
    // color: "#82c3ff",
    color: "#ffb0ec",
    marginBottom: "10px",
  },
  tableHeadSecondary: {
    // color: "#ffb0ec",
    color: "#9ed0ff",
    marginBottom: "10px",
  },
};

export default Home;
