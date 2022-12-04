import React from 'react'

const User = (props) => {
  return (
    <div>
        <h1>User component</h1>
        <h3>{props.data.name}</h3>
        <h4>{props.data.age}</h4>
    </div>
  )
}

export default User