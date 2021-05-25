import React from "react";
import "./design/style.scss";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import History from "./components/history/History";
import Results from "./components/results/Results";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      history: [],
    };
  }

  handleForm = (count, results, history) => {
    this.setState({ count, results, history });
  };

  render() {
    console.log(this.state.results);
    return (
      <React.Fragment>
        <Header />
        <Form handleForm={this.handleForm} history={this.state.history} />
        <History history={this.state.history} />
        <Results results={this.state.results} count={this.state.count} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
