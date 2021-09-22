import React from "react";
import ReactDom from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        console.log(error);
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <h2>
            <HemisphereDisplay latitude={this.state.latitude} />
          </h2>
        </div>
      );
    }
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          <h2>{this.state.errorMessage}</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    }
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
