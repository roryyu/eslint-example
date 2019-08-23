import React from 'react';
import ReactDOM from 'react-dom';

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rory',
    };
    this.nickname = 'xxx';
  }

  handleClick = (xxxx) => {
    this.nickname = xxxx;
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick('abc')}>{name}</button>
      </div>
    );
  }
}

ReactDOM.render(<A />, document.getElementById('root'));
