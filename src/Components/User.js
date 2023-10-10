import { useState } from 'react'
const User = ({ name, age, status }) => {
  const [count] = useState('0')
  const [count2] = useState('1')
  return (
    <>
      <div className='user'>
        <h1>count:{count}</h1>
        <h1>count2:{count2}</h1>
        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>status:{status}</h1>
      </div>
    </>
  )
}
export default User
