import React from 'react'

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count2: 1,
    }
  }
  render() {
    const { name, age, status } = this.props
    const { count, count2 } = this.state
    return (
      <>
        <div className='user'>
          <h1>count:{count}</h1>
          <h1>count2:{count2}</h1>
          <h1>name: {name}</h1>
          <h1>age:{age}</h1>
          <h1>status:{status}</h1>
        </div>
      </>
    )
  }
}

export default UserClass
