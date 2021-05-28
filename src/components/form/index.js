import React from "react";
import "./form.scss";
import axios from "axios";
import FormBody from "../formbody";
import FormQuery from "../formquery";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      query: "",
      value: "",
    };
  }

  handleUrlChange = (e) => {
    let url = e.target.value;
    this.props.handleUrl(url);
  };

  handleBody = (body) => {
    this.setState({ body });
  };

  handleQuery = (query) => {
    this.setState({ query });
  };

  handleValue = (value) => {
    this.setState({ value });
  };

  handleRestButton = (e) => {
    e.preventDefault();
    let rest = e.target.value;
    this.props.handleRest(rest);
  };

  handleGoButton = async (e) => {
    e.preventDefault();
    let history = this.props.history;
    let historyObj = {
      rest: this.props.rest,
      url: this.props.url,
      body: this.state.body,
      query: this.state.query,
      value: this.state.value,
    };
    history.push(historyObj);
    if (!localStorage.getItem(`${this.props.rest}-${this.props.url}`)) {
      localStorage.setItem(
        `${this.props.rest}-${this.props.url}`,
        JSON.stringify(historyObj)
      );
    }

    this.setState({ history });
    try {
      let data;
      let results = [];
      this.props.toggleLoad();
      if (this.props.rest === "get") {
        data = await axios.get(this.props.url);
      }
      if (this.props.rest === "post") {
        console.log("body", this.state.body);
        data = await axios.post(this.props.url, this.state.body);
      }

      // if (this.props.rest === "put") {
      //   data = await axios.put(this.props.url);
      // }
      if (this.props.rest === "delete") {
        data = await axios.delete(this.props.url);
      }

      let count = data.data.count;
      let header = data.headers;
      let body = data.data;

      results.push(header);
      results.push(body);
      setTimeout(() => {
        this.props.handleForm(count, results, history);
        this.props.toggleLoad();
      }, 1000);
    } catch (e) {
      setTimeout(() => {
        this.props.toggleLoad();
      }, 1000);
      console.log(e);
    }
  };

  render() {
    const isGet = this.props.rest === "get";
    return (
      <div>
        <h3>
          URL: &nbsp;
          <input
            type="text"
            onChange={this.handleUrlChange}
            value={this.props.url}
          />
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

        {isGet ? (
          <FormQuery
            handleQuery={this.handleQuery}
            handleValue={this.handleValue}
          />
        ) : (
          <FormBody handleBody={this.handleBody} />
        )}
      </div>
    );
  }
}

export default Form;
