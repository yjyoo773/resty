import React from "react";

import Form from "../form"
import History from "../history";
import Results from "../results";
import { Roller } from "react-awesome-spinners";

class Home extends React.Component {

  render() {
    return (
      <>
        <Form
          handleForm={this.props.handleForm}
          handleUrl={this.props.handleUrl}
          handleRest={this.props.handleRest}
          toggleLoad={this.props.toggleLoad}
          history={this.props.history}
          url={this.props.url}
          rest={this.props.rest}
        />
        {this.props.loading && <Roller />}
        <div
          className="histults"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            justifyItems: "center",
          }}
        >
          <History
            history={this.props.history}
            handleUrl={this.props.handleUrl}
            handleRest={this.props.handleRest}
          />
          {this.props.results.length > 0 ? (
            <Results results={this.props.results} count={this.props.count} />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Home