import React from "react";
import "./_formquery.scss";

class FormQuery extends React.Component {
  handleQueryChange = (e) => {
    let query = e.target.value;
    this.props.handleQuery(query);
  };

  handleValueChange = (e) => {
    let value = e.target.value;
    this.props.handleValue(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="query parameter"
          onChange={this.handleQueryChange}
        />
        <input
          type="text"
          placeholder="value"
          onChange={this.handleValueChange}
        />
      </div>
    );
  }
}
export default FormQuery;
