import React, { Component } from "react";

class TMInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { id, hintText, plateHolder } = this.props;
    return (
      <div className={`TMInput-component-${id}`}>
        <input className={`TMInput-textbox-${id}`} type="text" />
      </div>
    );
  }
}

TMInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  hintText: React.PropTypes.string,
  plateHolder: React.PropTypes.string
};

export default TMInput;
