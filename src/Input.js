import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input container">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type what you want to share..."
          />
          <button> <span className="hidden-sm hidden-xs">Send</span> <i className="fa fa-paper-plane-o"></i></button>
        </form>
      </div>
    );
  }
}

export default Input;
