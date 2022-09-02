import React from 'react';
import UserForm from './UserForm.jsx';

const App = () => {
  createUser = userData => {
    console.log(userData);
  };
  render() 
    return (
      <UserForm onSubmit={this.createUser}/>
    );
  
}

export default App;