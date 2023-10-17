import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'

function Login() {
  return (
    <>
        <Input
            required
            type="email"
            className="w-[70%]"
            placeholder="Email here"
        ></Input>
        <Input
            required
            type="password"
            className="w-[70%] m-3"
            placeholder="Password here"
        ></Input>
    </>
  )
}

export default Login