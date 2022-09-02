import React from 'react';
import UserForm from './UserForm.jsx';

const App = props => {
  createUser = userData => {
    console.log(userData);
  };
  render() 
    return (
      <UserForm onSubmit={this.props.createUser}/>
    );
  
}

export default App;