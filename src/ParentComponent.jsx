import React,{ useState } from "react";

function ParentComponent (){
    const [firstName, setFirstName] =useState("John")
    const [lastName, setLastName] = useState("Henry")

    function handleFirstNameChange(event){
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event){
        setLastName(event.target.value)
    }

    return (
        <form
        firstName={firstName} 
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        />
    )
}

export default ParentComponent;