import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class InputWithButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          追加
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(InputWithButton);
// export default AddTodo;
