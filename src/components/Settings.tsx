import React, { FC, useState } from "react";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";

const Settings: FC<any> = ({ setMetric, units,setIsCLose,isCLose }) => {


  const refresh = () => {
    window.location.reload();
  };
  const metricHandler = (units: string) => {
    units === "metric" ? setMetric("imperial") : setMetric("metric");
  };

  const useStyles = makeStyles({
    root: {
      height: "2rem",
      width: "2rem",
      cursor: "pointer",
      boxShadow: "0px 8.5px 13px 2px rgb(20 19 34 / 75%)",
      borderRadius: "40%",
      color:'rgba(231, 231, 235)'
    },
    setting: {
      height: "2rem",
      width: "2rem",
      marginTop: "10px",
      cursor: "pointer",
      boxShadow: "0px 8.5px 13px 2px rgb(20 19 34 / 75%)",
      borderRadius: "100%",
      color:'rgba(231, 231, 235)'
    },
  });

  const classes = useStyles();

  const handleToggle = () => {
    setIsCLose(!isCLose);
  };

  return (
    <div className="settings-container">
      <ul className="dropdown">
        <li>
          <SettingsIcon
            onClick={handleToggle}
            className={classes.setting}
          ></SettingsIcon>
        </li>

        <ul
          className={
            isCLose == true ? "dropdown-content-hiden" : "dropdown-content"
          }
        >
          <li>
            <button
              className="btn-degrees"
              onClick={() => metricHandler(units)}
            >
              {units === "metric" ? "F" : "C"}
            </button>
          </li>
          <li>
            <ExploreTwoToneIcon
              className={classes.root}
              onClick={refresh}
            ></ExploreTwoToneIcon>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Settings;
