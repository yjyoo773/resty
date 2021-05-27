import React from "react";

class FormBody extends React.Component {
  handleBodyChange = (e) => {
    let body = e.target.value;
    this.props.handleBody(body);
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="body" onChange={this.handleBodyChange} />
      </div>
    );
  }
}

export default FormBody;
