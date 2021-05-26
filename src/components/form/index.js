import React from "react";
import "./form.scss";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
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

  handleGoButton = async (e) => {
    e.preventDefault();
    let history = this.props.history;
    history.push(`${this.state.rest}   ${this.state.url}`);
    this.setState({ history });
    try {
      let data;
      let results = []
      // if (this.state.rest === "get") {
        data = await axios.get(this.state.url);
      // }
      // if (this.state.rest === "post") {
      //   data = await axios.post(this.state.url);
      // }
      // if (this.state.rest === "put") {
      //   data = await axios.put(this.state.url);
      // }
      // if (this.state.rest === "delete") {
      //   data = await axios.delete(this.state.url);
      // }
      let count = data.data.count;
      let header = data.headers
      let body = data.data
      results.push(header)
      results.push(body)
      console.log('from form',data)
      this.props.handleForm(count, results,history);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    // const list = this.props.history.map((element) => <li>{element}</li>);
    return (
      <div>
        <div>
          <h3>
            URL: &nbsp;
            <input type="text" required onChange={this.handleUrlChange} />
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

        {/* <div className="history">
          <ul>{list}</ul>
        </div> */}
      </div>
    );
  }
}

export default Form;
