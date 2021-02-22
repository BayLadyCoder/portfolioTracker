import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div style={styles.container}>
      <Home />
      {/* <button
        onClick={() => {
          electron.notificationApi.sendNotification(
            "Hey, Andrew! I'm testing a notification."
          );
        }}
      >
        Notify
      </button> */}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
};

export default App;
