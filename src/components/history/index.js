import React, { useContext } from "react";
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

// class History extends React.Component {
//   getvals = (e) => {
//     let req = e.target.innerHTML;
//     req = req.split(/[ ]+/);
//     let url = req[1];
//     let rest = req[0];
//     this.props.handleRest(rest);
//     this.props.handleUrl(url);
//   };
//   render() {
//     const list = this.props.history.map((element, idx) => (
//       <li key={idx} onClick={this.getvals} className="historyList">
//         {element["rest"]} {element["url"]}
//       </li>
//     ));
//     return (
//       <>
//         <ul>{list}</ul>
//       </>
//     );
//   }
// }

export default History;
