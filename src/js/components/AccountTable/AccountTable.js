import React, { useState, useEffect } from "react";

const AccountTable = ({ account }) => {
  const [isDayGainDollar, setIsDayGainDollar] = useState(true);
  const [isTotalGainDollar, setIsTotalGainDollar] = useState(true);

  const toggleDollarOrPercent = (e, type) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    const button = e.target.innerHTML;
    if (type === "day") {
      if (button === "$") setIsDayGainDollar(true);
      else setIsDayGainDollar(false);
    } else {
      if (button === "$") setIsTotalGainDollar(true);
      else setIsTotalGainDollar(false);
    }
  };

  const dollarOrPercentButton = (content, type) => (
    <a
      href="#"
      style={styles.dollarOrPercent}
      onClick={(e) => toggleDollarOrPercent(e, type)}
    >
      {content}
    </a>
  );

  const negativeColor = "#ff4d29";
  const positiveColor = "#02ed02";
  return (
    <table style={styles.table}>
      <tbody>
        <tr>
          <th style={styles.tableHead}>Date</th>
          <th style={styles.tableHead}>Cost</th>
          <th style={styles.tableHead}>Acc. Value</th>
          <th style={styles.tableHead}>
            Day's Gain <br />
            {dollarOrPercentButton("$", "day")} |{" "}
            {dollarOrPercentButton("%", "day")}
          </th>
          <th style={styles.tableHead}>
            Total Gain
            <br />
            {dollarOrPercentButton("$", "total")} |{" "}
            {dollarOrPercentButton("%", "total")}
          </th>
        </tr>
        {account.map((acc, index) => (
          <tr key={index}>
            <td>{acc.date}</td>
            <td>{acc.cost}</td>
            <td>{acc.acc_value}</td>
            <td
              style={{
                fontWeight: "700",
                color:
                  acc.day_gain_dollar[0] === "-"
                    ? negativeColor
                    : positiveColor,
              }}
            >
              {isDayGainDollar ? acc.day_gain_dollar : acc.day_gain_percentage}
            </td>
            <td
              style={{
                fontWeight: "700",

                color:
                  acc.total_gain_dollar[0] === "-"
                    ? negativeColor
                    : positiveColor,
              }}
            >
              {isTotalGainDollar
                ? acc.total_gain_dollar
                : acc.total_gain_percentage}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    color: "#ffffff",
  },
  tableHead: {
    // color: "#ffb0ec",
    color: "#9ed0ff",

    fontSize: "19px",
  },
  dollarOrPercent: {
    // color: "#ffed7a",
    color: "#ffffff",
    textDecoration: "none",
  },
};

export default AccountTable;
