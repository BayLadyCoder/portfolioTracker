import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

const AddNewAccountModal = ({ open, handleCloseNewAccModal }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [brokerName, setBrokerName] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const brokers = [
    "Etrade",
    "Webull",
    "Robinhood",
    "Charles Schwab",
    "Fidelity",
    "TD Ameritrade",
  ];

  const handleChangeBrokerName = (e) => {
    e.persist();
    console.log(e.target.value);
    setBrokerName(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseNewAccModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div
        // style={{ color: "white" }}
        style={modalStyle}
        className={classes.paper}
      >
        <div className={classes.header}>
          <h2 id="simple-modal-title">Add New Account</h2>
          <IconButton onClick={handleCloseNewAccModal}>
            <CloseIcon />
          </IconButton>
        </div>

        <form className={classes.form} noValidate autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel>Broker Name</InputLabel>
            <Select
              style={{ width: "100%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brokerName}
              onChange={(e) => handleChangeBrokerName(e)}
            >
              {brokers.map((broker) => (
                <MenuItem value={broker}>{broker}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            style={{ marginBottom: 15 }}
            id="outlined-full-width"
            label="Account No."
            // style={{ marginTop: 8 }}
            // placeholder="Broker Name"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="outlined"
          />
          <FormControl
            fullWidth
            className={classes.margin}
            style={{ marginBottom: 15 }}
          >
            <InputLabel htmlFor="standard-adornment-amount">
              Invested Cost
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              //   value={values.amount}
              //   onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider> */}
          <div className={classes.btnContainer}>
            <Button variant="contained" color="primary" className={classes.btn}>
              Add
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.btn}
              onClick={handleCloseNewAccModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    // height: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  btn: {
    marginLeft: "10px",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

export default AddNewAccountModal;
