import React from "react";
import Results from "../results";
import { withRouter } from "react-router-dom";

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results2: {},
    };
  }
  getBody = (e) => {
    let req = e.target.innerHTML;
    req = req.split("<");
    this.setState({ results2: JSON.parse(localStorage.getItem(req[0])) });
  };

  fillHome = (e) => {
    e.preventDefault();
    let item = JSON.parse(localStorage.getItem(e.target.value));
    let url = item["url"];
    let rest = item["rest"];
    this.props.handleUrl(url);
    this.props.handleRest(rest);
    const { history } = this.props;
    if (history) history.push("/resty");
  };

  render() {
    let list2 = [];
    for (let i = 0; i < localStorage.length; i++) {
      list2.push(localStorage.key(i));
    }
    list2 = list2.map((element, idx) => (
      <>
        <li key={idx} onClick={this.getBody} className="historyList">
          {element}
        </li>
        <button onClick={this.fillHome} value={element}>
          Re-Run
        </button>
      </>
    ));

    return (
      <div
        className="histults"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyItems: "center",
        }}
      >
        <ul>{list2}</ul>
        {Object.keys(this.state.results2).length !== 0 ? (
          <Results results={this.state.results2} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withRouter(HistoryPage);
