import React from 'react';

function Arrays() {

    const students= [
        {
            id: 1,
            name: 'mark'
        },
        {
            id: 2,
            name: 'Bill'
        },
        {
            id: 3,
            name: 'Jobs'
        }
    ]
  return (
  <div>
    <h1>Arrays in react.</h1>
    {students.map((student) => (
        <h1>{student.name}</h1>
    ))}
  </div>
  )
}

export default Arrays;
