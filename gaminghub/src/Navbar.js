import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    // Setting up initial state in a Class Component, falling back to props!
    this.state = {
      appName: 'React Gaming Hub'
    };
    
    // In older React, we had to bind functions in the constructor like this:
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    // window.history.back() takes the user to their previous page
    window.history.back();
  }

  render() {
    return (
      <nav className="navbar" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 20px', 
        backgroundColor: '#282c34', 
        color: 'white',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: 0 }}>{this.state.appName}</h2>
        <span style={{ fontWeight: 'bold' }}>Welcome, {this.props.username}!</span>
        <button onClick={this.handleBack} style={{ padding: '8px 16px', fontSize: '14px', cursor: 'pointer' }}>
          ⬅ Back
        </button>
      </nav>
    );
  }
}

export default Navbar;
