import React from "react";
import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      history: [],
      rest: "get",
    };
  }

  handleUrlChange = (e) => {
    let url = e.target.value;
    this.setState({ url });
  };

  handleRestButton = (e) => {
    e.preventDefault();
    let rest = e.target.value;
    this.setState({ rest });
  };

  handleGoButton = (e) => {
    e.preventDefault();
    let history = this.state.history;
    history.push(`${this.state.rest}   ${this.state.url}`);
    this.setState({ history });
  };

  render() {
    const list = this.state.history.map((element) => <li>{element}</li>);
    return (
      <div>
        <div>
          <h3>
            URL: &nbsp;
            <input type="text" onChange={this.handleUrlChange} />
            <button onClick={this.handleGoButton}>GO!</button>
          </h3>

          <button onClick={this.handleRestButton} value="get">
            GET
          </button>
          <button onClick={this.handleRestButton} value="post">
            POST
          </button>
          <button onClick={this.handleRestButton} value="put">
            PUT
          </button>
          <button onClick={this.handleRestButton} value="delete">
            DELETE
          </button>
        </div>

        <div className='history'>
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

export default Form;
