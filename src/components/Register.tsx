import React, { useState } from 'react'

const Register: React.FC = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  return (
    <div className='register-container'>
      <input name='username' type='text' placeholder='username' />
      <input name='password' type='passowrd' placeholder='password' />
      <div className='button-container'>
        <button>Register</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}

export default Register