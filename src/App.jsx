import React from 'react';
import UserForm from './UserForm.jsx';

const App = () => {
  const createUser = userData => {
    console.log(userData);
  }
  render() 
    return (   
      <UserForm onSubmit = {createUser}/>
    );
  
}

export default App;