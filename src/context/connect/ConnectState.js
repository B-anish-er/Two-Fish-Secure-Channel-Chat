import React, { useState } from "react";
import axios from "axios";

import ConnectContext from "./connectContext";

const ConnectState = (props) => {
  const [state, setState] = useState({
    loading: true,
    selectedConnection: "",
    connections: null,
    error: null,
  });

  const getAllConnections = async (username) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        `http://localhost:8000/api/connection/user/${username}`,
        config
      );

      if (res.data.msg === "err")
        setState((prevValue) => ({ ...prevValue, error: res.data.error }));
      else
        setState((prevValue) => ({
          ...prevValue,
          error: null,
          connections: res.data.connections,
        }));
    } catch (err) {
      setState((prevValue) => ({ ...prevValue, error: err }));
    }
  };
  const selectConnection = async (connectionName) => {
    if (!state.connections)
      setState((prevValue) => ({
        ...prevValue,
        error: "No connections found",
      }));
    else {
      let found = Object.keys(state.connections).filter(
        (value) => value === connectionName
      );
      if (found.length === 0)
        setState((prevValue) => ({
          ...prevValue,
          error: "Connection not found",
        }));
      else {
        setState((prevValue) => ({
          ...prevValue,
          error: null,
          selectedConnection: connectionName,
        }));
      }
    }
  };

  const createConnection = async (connectionName, username) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `http://localhost:8000/api/connection/createconnection`,
        { username, connectionName },
        config
      );
      console.log(res.data);
      if (res.data.msg === "err")
        setState((prevValue) => ({ ...prevValue, error: res.data.error }));
      else
        setState((prevValue) => ({
          ...prevValue,
          error: null,
          connections: res.data.connections,
        }));
    } catch (err) {
      setState((prevValue) => ({ ...prevValue, error: err }));
    }
  };

  const acceptConnection = async (connectionName, username) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `http://localhost:8000/api/connection/acceptconnection`,
        { username, connectionName },
        config
      );
      console.log(res.data);
      if (res.data.msg === "err")
        setState((prevValue) => ({ ...prevValue, error: res.data.error }));
      else
        setState((prevValue) => ({
          ...prevValue,
          error: null,
          connections: res.data.connections,
        }));
    } catch (err) {
      setState((prevValue) => ({ ...prevValue, error: err }));
    }
  };

  return (
    <ConnectContext.Provider
      value={{
        loading: state.loading,
        selectedConnection: state.selectedConnection,
        connections: state.connections,
        error: state.error,
        selectConnection,
        getAllConnections,
        createConnection,
        acceptConnection,
      }}
    >
      {props.children}
    </ConnectContext.Provider>
  );
};

export default ConnectState;
