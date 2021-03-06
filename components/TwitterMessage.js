import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      message: '',
    };
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <span>{this.props.maxChars - this.state.message.length} characters remaining</span>
      </div>
    );
  }
}
