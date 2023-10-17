import React from 'react'
import { Input } from '../ui/input'

function Register() {
  return (
    <>
        <Input
            type="text"
            className="w-[70%] m-1"
            placeholder="Name"
        ></Input>
        <Input
            type="email"
            className="w-[70%] m-1"
            placeholder="Email"
        ></Input>
        <Input
            type="password"
            className="w-[70%] m-1"
            placeholder="Password"
        ></Input>
        <Input
            type="password"
            className="w-[70%] m-1"
            placeholder="Comfirm password"
        ></Input>
    </>
  )
}

export default Register