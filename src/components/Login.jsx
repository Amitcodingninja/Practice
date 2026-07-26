import React from 'react'
import ActionButton from './ActionButton'
const Login = ({ onLoginSuccess = () => { } }) => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-2xl font-bold mb-4">Login</div>
            <input type="text" placeholder="Username" className="px-4 py-2 mb-4 border rounded-md" />
            <input type="password" placeholder="Password" className="px-4 py-2 mb-4 border rounded-md" />
            <ActionButton color="green" label="Login" onclick={onLoginSuccess} />
        </div>


    </div>
  )
}

export default Login
