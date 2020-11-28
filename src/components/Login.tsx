import React, { useState } from 'react'

const Login: React.FC = () => {

  const [state, setState] = useState({
    username: '',
    password: ''
  })

  return (
    <div className='login-container'>Login.tsx
      <input name='username' type='text' placeholder='username' />
      <input name='password' type='passowrd' placeholder='password' />
      <div className='button-container'>
        <button>Login</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}

export default Login