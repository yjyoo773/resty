import React, { useState } from "react";
export const SettingContext = React.createContext();

function SettingProvider(props) {
  const [result, setResult] = useState([]);
  const [history, setHistory] = useState([]);
  const [rest, setRest] = useState("get");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const state = {
    result,
    history,
    rest,
    url,
    body,
    query,
    value,
    loading,
    changeResult: setResult,
    changeHistory: setHistory,
    changeRest: setRest,
    changeUrl: setUrl,
    changeBody: setBody,
    changeQuery: setQuery,
    changeValue: setValue,
    changeLoading: setLoading,
  };
  return (
      <SettingContext.Provider value = {state}>
          {props.children}
      </SettingContext.Provider>
  )
}

export default SettingProvider;