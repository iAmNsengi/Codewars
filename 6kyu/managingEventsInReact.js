import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <>
        <h1 id="counter">{this.state.counter}</h1>
        <button
          type="button"
          id="decrement"
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Decrement
        </button>
        <button
          type="button"
          id="increment"
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
      </>
    );
  }
}
