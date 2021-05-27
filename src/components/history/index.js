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
    console.log(e.target);
  };
  render() {
    const list = this.props.history.map((element, idx) => (
      <li key={idx} onClick={this.getvals}>
        {element[0]} {element[1]}
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
