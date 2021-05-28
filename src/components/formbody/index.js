import React from "react";
import "./formbody.scss";

class FormBody extends React.Component {
  handleBodyChange = (e) => {
    let body = e.target.value;
    this.props.handleBody(body);
  };

  render() {
    return (
      <div>
        <textarea type="text" placeholder="type body in JSON format" onChange={this.handleBodyChange} />
      </div>
    );
  }
}

export default FormBody;
