import React from 'react'
import Person from './Person'
 
function Persons() {
    const persons=[
        {
            id:1,
            name:"Subham"
        },
        {
            id:2,
            name:"sudip"
        },
        {
          id:3,
          name:"suraj"
      }
    ]
  return (
    <div>
      {/*Below code will give error in console as it does not have key props */}
      {/* {persons.map((person)=>(
        <Person personlist={person}/>
      ))} */}
      
      {/* below code remove error in console as we have unique key id for each person 
        //key props in reserved for that commponent only, if you pass it as prop and try to acces in child it will not able to acces that
      */}
      {persons.map((person)=>(
        <Person personlist={person} key={person.id}/>
      ))}
      
    </div>
  )
}

export default Persons