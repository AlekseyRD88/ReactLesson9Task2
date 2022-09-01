import React, { Component } from 'react';
class UserForm extends Component {
  render() {
    return (
      <form classclass
      ="login-form">
        <h1 classclass
        ="form-title">Profile</h1>
      <div classclass
      ="form-control">
      <label classclass
      ="form-label" for="class
      ">class
      </label>
      <input classclass
      ="form-input" type="text" id="class
      " class
      ="class
      " value="" />
      </div>
      <div class
      Name="form-control">
        <label class
        ="form-label" for="student">Student</label>
        <input class
        ="form-input" type="checkbox" id="student" class
        ="student" />
      </div>
      <div class
      ="form-control">
        <label class
        ="form-label" id="occupation" for="occupation">Occupation</label>
        <select class
        ="occupation" class
        ="form-input">
        <option value="london">London</option>
        <option value="new-york">New York</option>
        <option value="coconut">Sidney</option>
        <option value="mango">Berlin</option>
        </select>
      </div>
      <div class
      ="form-control">
        <label class
        ="form-label" id="about" for="about">About</label>
        <textarea class
        ="about" class
        ="form-input"></textarea>
      </div>
      <button class
      ="submit-button" type="submit">Submit</button>
    </form>
    );
  }
}

export default UserForm;