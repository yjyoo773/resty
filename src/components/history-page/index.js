import { useContext } from "react";
import Results from "../results";
import { useHistory } from "react-router-dom";
import { SettingContext } from "../../context/settings.js";

const HistoryPage = () => {
  const context = useContext(SettingContext);
  const usingHistory = useHistory();
  let getBody = (e) => {
    let req = e.target.innerHTML.split("<");
    context.changeResult(JSON.parse(sessionStorage.getItem(req[0])));
  };

  let fillHome = (e) => {
    e.preventDefault();
    let item = JSON.parse(sessionStorage.getItem(e.target.value));
    let url = item["url"];
    let rest = item["rest"];
    context.changeUrl(url);
    context.changeRest(rest);

    if(usingHistory) usingHistory.push("/resty");
  };

  let list = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    list.push(sessionStorage.key(i));
  }
  list = list.map((element, idx) => {
    return (
      <>
        <li key={idx} onClick={getBody} className="historyList">
          {element}
        </li>
        <button onClick={fillHome} value={element}>
          Re-Run
        </button>
      </>
    );
  });

  return (
    <div
      className="histults"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "center",
      }}
    >
      <ul>{list}</ul>
      {Object.keys(context.result).length > 0 ? <Results /> : null}
    </div>
  );
};

export default HistoryPage;
