import React from "react";
import "./design/style.scss";
import Header from "./components/header";
import Form from "./components/form";
import History from "./components/history";
import Results from "./components/results";
import Footer from "./components/footer";



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
      <>
        <Header />
        <Form handleForm={this.handleForm} history={this.state.history} />
            <History history={this.state.history} />
            <Results results={this.state.results} count={this.state.count} />
        <Footer />
      </>
    );
  }
}

export default App;
