import React from "react";
import "./design/style.scss";
import Header from "./components/header";
import Home from "./components/home";
import HistoryPage from "./components/history-page";
import Help from "./components/helper";

import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      history: [],
      rest: "get",
      url: "",
      body: "",
      query: "",
      value: "",
      loading: false,
    };
  }

  handleForm = (count, results, history) => {
    this.setState({ count, results, history });
  };

  toggleLoad = () => {
    this.setState({ loading: !this.state.loading });
  };

  handleUrl = (url) => {
    this.setState({ url });
  };

  handleRest = (rest) => {
    this.setState({ rest });
  };
  handleBody = (body) => {
    this.setState({ body });
  };
  handleValue = (value) => {
    this.setState({ value });
  };
  handleQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/resty">
            <Home
              handleForm={this.handleForm}
              handleUrl={this.handleUrl}
              handleRest={this.handleRest}
              handleBody={this.handleBody}
              handleQuery={this.handleQuery}
              handleValue={this.handleValue}
              toggleLoad={this.toggleLoad}
              history={this.state.history}
              url={this.state.url}
              rest={this.state.rest}
              loading={this.state.loading}
              results={this.state.results}
              count={this.state.count}
              body={this.state.body}
              query={this.state.query}
              value={this.state.value}
            />
          </Route>
          <Route exact path="/history">
            <HistoryPage
              history={this.state.history}
              handleUrl={this.handleUrl}
              handleRest={this.handleRest}
            />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
