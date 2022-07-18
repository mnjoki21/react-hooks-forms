import React from "react";

function Form(props){
  <form>
u    <input type="text"
    onChange={props.handleFirstNameChange}
    value = {props.firstName} />
    <input
     type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
    />
     <button type="submit">Submit</button>
  </form>
}

export default Form;
