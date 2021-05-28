import React from "react";
import "./history.scss";

class History extends React.Component {
  getvals = (e) => {
    let req = e.target.innerHTML;
    req = req.split(/[ ]+/);
    let url = req[1];
    let rest = req[0];
    this.props.handleRest(rest);
    this.props.handleUrl(url);
  };
  render() {
    const list = this.props.history.map((element, idx) => (
      <li key={idx} onClick={this.getvals} className ='historyList'>
        {element['rest']} {element['url']}
      </li>
    ));
    return (
      <>
        <ul>{list}</ul>
      </>
    );
  }
}

export default History;
