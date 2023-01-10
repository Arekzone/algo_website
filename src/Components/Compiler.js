import React from 'react';

class Compiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceCode: '',
      output: '',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({sourceCode: event.target.value});
  }

  handleSubmit(event) {
    // Simulate the compilation process
    if (this.state.sourceCode.includes('error')) {
      this.setState({error: 'Error: invalid syntax'});
    } else {
      this.setState({output: 'Compilation successful! Output file: a.out'});
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Source code:
            <textarea value={this.state.sourceCode} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Compile" />
        </form>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.output && <p>{this.state.output}</p>}
      </div>
    );
  }
}
export default Compiler;