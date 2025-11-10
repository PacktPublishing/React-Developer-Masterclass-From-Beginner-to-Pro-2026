import { Component } from "react";

type State = {
  count: number;
};

export class CounterClass extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(): null {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(): boolean {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(): null {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
