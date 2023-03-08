import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import { useSession, signIn, signOut } from 'next-auth/react'
import AppleIcon from '@mui/icons-material/Apple';
import Link from 'next/link';


const SigninForm = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p className='text-gray-700 p-6 mb-4 text-xl'>Welcome, {session.user.name}</p>
        <Link className='text-white p-6 my-6 bg-green-500 rounded font-bold' href={'/portal'}>Continue to Dashboard</Link>
        <p className='mt-8 mb-2 text-gray-700'>or</p>
        <button className='p-2 border m-2 rounded-md text-gray-600' onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  else {
  return (
    <div className='p-10 flex flex-col'>
        <div className='rounded-full w-14 self-center mb-2 bg-blue-900 text-white p-4'>
            <LockOutlinedIcon />
        </div>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
      <form action="">
        <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
        <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
        <Button className='m-4 py-2 px-10 border-gray-400 bg-blue-900 text-white font-bold hover:bg-blue-800' variant="outlined">Sign in</Button>

        <hr class="my-6 border-gray-300 w-full"></hr>
        <button onClick={() => signIn()} type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
            <GoogleIcon className='text-black'/>
            <span class="ml-4">Log in with Google</span>
            </div>
          </button>
        <button onClick={() => signIn()} type="button" class="w-full block my-2 bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
            <AppleIcon className='text-black'/>
            <span class="ml-4">Log in with Apple</span>
            </div>
        </button>
      </form>
    </div>
  )
  }
}

export default SigninForm