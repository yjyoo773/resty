import React from "react";
import "./design/style.scss";
import Header from "./components/header";
import Form from "./components/form";
import History from "./components/history";
import Results from "./components/results";
import Footer from "./components/footer";
import { Roller } from "react-awesome-spinners";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      history: [],
      rest: "get",
      url: "",
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

  handleHistory = (url, rest) => {
    this.setState({ url, rest });
  };

  render() {
    return (
      <>
        <Header />
        <Form
          handleForm={this.handleForm}
          handleUrl={this.handleUrl}
          handleRest={this.handleRest}
          toggleLoad={this.toggleLoad}
          history={this.state.history}
          url={this.state.url}
          rest={this.state.rest}
        />
        {this.state.loading && <Roller/>}
        <div
          className="histults"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            justifyItems: "center",
          }}
        >
          <History
            history={this.state.history}
            handleUrl={this.handleUrl}
            handleRest={this.handleRest}
          />
          {this.state.results.length > 0 ? (
            <Results results={this.state.results} count={this.state.count} />
          ) : (
            ""
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
