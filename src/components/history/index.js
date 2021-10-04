import { useContext } from "react";
import "./history.scss";
import { SettingContext } from "../../context/settings.js";

const History = () => {
  const context = useContext(SettingContext);
  let getVals = (e) => {
    let req = e.target.innerHTML;
    req = req.split(/[ ]+/);
    let url = req[1];
    let rest = req[0];
    context.changeRest(rest);
    context.changeUrl(url);
  };

  let list = context.history.map((element, idx) => {
    return <li key={idx} onClick={getVals} className="historyList">
      {element["rest"]} {element["url"]}
    </li>;
  });
  return <ul>{list}</ul>;
};

export default History;
