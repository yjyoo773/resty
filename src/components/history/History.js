import React from "react";
import './history.scss';

class History extends React.Component {
  render() {
    const list = this.props.history.map((element,idx) => <li key={idx}>{element}</li>);
    return (
      <>
        <ul>{list}</ul>
      </>
    );
  }
}

export default History;
