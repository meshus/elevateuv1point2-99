import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-4">
      <div className="mb-8 text-center">
        <img src="/logo.png" alt="ElevateU Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-gray-600">Sign in to access your profile and receive real-time notifications</p>
      </div>
      <form className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full bg-red-500 text-white">Continue</Button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-600">or</p>
      </div>
      <Button className="mt-4 w-full bg-blue-600 text-white">Continue with Facebook</Button>
      <Button className="mt-4 w-full bg-white text-black border border-gray-300">Continue with Google</Button>
      <p className="mt-8 text-center">
        New to ElevateU? <a href="/signup" className="text-green-500">Signup</a>
      </p>
    </div>
  );
};

export default Login;