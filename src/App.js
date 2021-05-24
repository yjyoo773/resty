import React from "react";
import './style.scss'
import Header from "./Header"
import Form from "./Form"
import Footer from "./Footer"


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
