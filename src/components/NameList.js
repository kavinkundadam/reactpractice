import React from 'react'
import Person from './Person'

function NameList() {
    // const names =['Kavin', 'Manudheeran', 'Sibi'];
    // const nameList = names.map( name => <h2> {name} </h2> );
    // return <div>{nameList}</div>
    const persons = [
        {
            id:1,
            name: "Kavin",
            age: "22",
            skill: "Coding"
        },
        {
            id:2,
            name: "Manudheeran",
            age: "20",
            skill: "Reading"
        },
        {
            id:3,
            name: "Sibi",
            age: "2",
            skill: "writing"
        }
    ]
    // const personList = persons.map( person => 
    //     <h2> 
    //         I am {person.name}, My age is {person.age}, My hobby is {person.skill} 
    //     </h2> 
    // );
    const personList = persons.map( person => (<Person key={person.id} person={person} />))
    return <div>{personList}</div>
}

export default NameList